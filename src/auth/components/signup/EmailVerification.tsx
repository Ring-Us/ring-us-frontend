import { useState } from 'react';
import { AuthButton } from '@/auth/components/AuthButton';
import { AuthInputBox } from '@/auth/components/AuthInputBox';

const EmailVerification = ({ onNext }: { onNext: () => void }) => {
  const [email, setEmail] = useState(''); // 이메일 상태
  const [isEmailValid, setIsEmailValid] = useState(false); // 이메일 유효성 상태
  const [isCodeSent, setIsCodeSent] = useState(false); // 인증번호 전송 상태
  const [verificationCode, setVerificationCode] = useState(''); // 인증번호 상태
  const [isCodeValid, setIsCodeValid] = useState(false); // 인증번호 유효성 상태

  // 이메일 입력 핸들러
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 유효성 정규식
    setIsEmailValid(regex.test(value)); // 이메일 유효성 검사
  };

  // 인증번호 입력 핸들러
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVerificationCode(value);

    // 인증번호 유효성 검사
    setIsCodeValid(value.length === 4); // 예: 인증번호는 4자리
  };

  return (
    <div className="relative flex flex-col w-full mt-8">
      <span className="text-sm text-primary-1">
        * 학교 이메일로 인증시 빠르게 넘어갈 수 있어요
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

      {/* 이메일 입력 또는 인증번호 입력 */}
      {!isCodeSent ? (
        <div className="mt-12">
          <AuthInputBox
            label="아이디"
            type="email"
            placeholder="abc@email.com"
            value={email}
            onChange={handleEmail}
            error={
              !isEmailValid && email.length > 0
                ? '올바른 이메일을 입력해주세요.'
                : ''
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
          />
          <div className="p-2 text-gray-2 text-xs">
            메일이 안 왔을 경우, 스팸함을 확인해주세요.
          </div>
        </div>
      )}

      {/* 버튼 */}
      <div className="absolute bottom-16 w-full">
        {!isCodeSent ? (
          <AuthButton
            onClick={() => {
              if (isEmailValid) {
                setIsCodeSent(true); // 인증번호 전송 상태로 전환
              }
            }}
            variant={isEmailValid ? 'default' : 'secondary'}
          >
            인증번호 받기
          </AuthButton>
        ) : (
          <AuthButton
            onClick={onNext}
            variant={isCodeValid ? 'default' : 'secondary'}
          >
            다음으로
          </AuthButton>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
