import { useState } from 'react';
import { AuthButton } from '@/auth/components/AuthButton';
import { AuthInputBox } from '@/auth/components/AuthInputBox';
import { sendVerificationCode, verifyCode } from '@/auth/api/emailApi'; // ✅ API 함수 import

const EmailVerification = ({ onNext }: { onNext: (email: string) => void }) => {
  const [email, setEmail] = useState(''); // 이메일 상태
  const [isEmailValid, setIsEmailValid] = useState(false); // 이메일 유효성 상태
  const [isCodeSent, setIsCodeSent] = useState(false); // 인증번호 전송 상태
  const [verificationCode, setVerificationCode] = useState(''); // 인증번호 상태
  const [isCodeVerified, setIsCodeVerified] = useState(false); // 인증 성공 여부
  const [codeError, setCodeError] = useState(''); // 인증번호 오류 메시지
  const [successMessage, setSuccessMessage] = useState(''); // 인증 성공 메시지

  // 이메일 입력 핸들러
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 유효성 정규식
    setIsEmailValid(regex.test(value));

    if (codeError) {
      setCodeError('');
    }
  };

  // 인증번호 입력 핸들러
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  // 이메일 인증번호 요청 (버튼 클릭 시 실행)
  const handleSendCode = async () => {
    if (!isEmailValid) return;

    try {
      await sendVerificationCode(email); // 백엔드에 이메일 전송
      setIsCodeSent(true); // 인증번호 입력 화면으로 전환
    } catch (error: any) {
      if (error.response && error.response.data) {
        const { status } = error.response.data;

        if (status === 409) {
          setCodeError('이미 사용된 이메일입니다. 다른 이메일로 가입해주세요.');
        } else {
          setCodeError('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
        }
      } else {
        setCodeError('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      }
    }
  };

  // 인증번호 검증 (버튼 클릭 시 실행)
  // 인증번호 검증 (버튼 클릭 시 실행)
  const handleVerifyCode = async () => {
    if (!verificationCode) return;

    try {
      console.log('📡 백엔드로 전송할 데이터:', { email, verificationCode });

      const response = await verifyCode(email, verificationCode); // 백엔드 요청
      console.log('백엔드 응답:', response);

      // 응답 상태에 따른 예외 처리
      if (response.status === 200 || response.status === 201) {
        setIsCodeVerified(true); // 인증 성공 시 버튼 활성화
        setCodeError(''); // 오류 메시지 초기화
        setSuccessMessage('✅ 인증이 성공하였습니다!');

        // ✅ 세션 쿠키 요청 (인증 성공 후 실행)
        try {
          const sessionResponse = await fetch('/api/protected-route', {
            method: 'GET',
            credentials: 'include', // 쿠키 자동 포함
          });

          if (sessionResponse.ok) {
            console.log('✅ 세션 설정 완료:', sessionResponse);
          } else {
            console.error('❌ 세션 설정 실패:', sessionResponse);
          }
        } catch (sessionError) {
          console.error('❌ 세션 요청 중 오류 발생:', sessionError);
        }
      } else {
        throw new Error(response.message || '인증번호가 올바르지 않습니다.');
      }
    } catch (error: any) {
      if (error.response) {
        const { status, message } = error.response.data;

        if (status === 400) {
          setCodeError('❌ 인증번호가 올바르지 않습니다.');
        } else if (status === 403) {
          if (message.includes('TTL')) {
            setCodeError('❌ 인증번호가 만료되었습니다. 다시 요청해주세요.');
          } else if (message.includes('5회')) {
            setCodeError('❌ 인증번호를 5회 틀렸습니다. 다시 요청해주세요.');
          } else {
            setCodeError('❌ 인증이 거부되었습니다.');
          }
        } else {
          setCodeError('❌ 인증 실패. 다시 시도해주세요.');
        }
      } else {
        setCodeError('❌ 서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      }

      setIsCodeVerified(false);
      setSuccessMessage('');
    }
  };

  return (
    <div className="relative flex flex-col w-full mt-8">
      <span className="text-sm text-primary-1">
        * 학교 이메일로 인증 시 빠르게 넘어갈 수 있어요
      </span>

      {/* 제목 */}
      <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold mt-2">
        {!isCodeSent ? (
          <>
            이메일 인증을 완료하면 <br /> 가입을 시작할 수 있어요!
          </>
        ) : (
          <>
            {email}
            로 전송된 <br />
            인증번호를 입력하세요.
          </>
        )}
      </h3>

      {/* 이메일 입력 or 인증번호 입력 */}
      {!isCodeSent ? (
        <div className="mt-12">
          <AuthInputBox
            label="이메일"
            type="email"
            placeholder="abc@email.com"
            value={email}
            onChange={handleEmail}
            error={
              (!isEmailValid && email.length > 0
                ? '올바른 이메일을 입력해주세요. '
                : '') || codeError // 이메일 오류가 없으면 codeError를 표시
            }
          />
        </div>
      ) : (
        <div className="mt-12">
          <AuthInputBox
            label="인증번호"
            type="text"
            placeholder="인증번호 4자리를 입력하세요."
            value={verificationCode}
            onChange={handleCode}
            buttonLabel="인증번호 확인"
            onButtonClick={handleVerifyCode} // 인증번호 확인 버튼 추가
            error={codeError} // 인증 실패 시 오류 메시지 표시
            successMessage={successMessage}
          />
          <div className="p-2 text-gray-2 text-xs">
            메일이 안 왔을 경우, 스팸함을 확인해주세요.
          </div>
          {/* {successMessage && (
            <div className=" text-authGreen text-sm font-bold">
              {successMessage}
            </div>
          )} */}
        </div>
      )}

      {/* 버튼 */}
      <div className="absolute bottom-16 w-full flex gap-2">
        {!isCodeSent ? (
          <AuthButton
            onClick={handleSendCode}
            variant={isEmailValid ? 'default' : 'secondary'}
            disabled={!isEmailValid}
          >
            인증번호 받기
          </AuthButton>
        ) : (
          <AuthButton
            onClick={() => onNext(email)}
            variant={isCodeVerified ? 'default' : 'secondary'}
            disabled={!isCodeVerified}
          >
            다음으로
          </AuthButton>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
