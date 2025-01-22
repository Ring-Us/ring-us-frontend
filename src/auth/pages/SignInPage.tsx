import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthButton } from '@/auth/components/AuthButton';
import { SigninInput } from '@/auth/components/SigninInput';

export default function SigninPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="h-[calc(100vh-60px)] p-[20px] flex flex-col items-center justify-center">
      {/* 로고 */}
      <div className="mb-8">
        <img
          src="/src/assets/logo.png"
          alt="Logo"
          className="w-[calc(25vh-20px)] h-auto"
        />
      </div>

      {/* 로그인 폼 */}
      <div className="w-full max-w-[600px]">
        {/* 이메일 입력 */}
        <SigninInput
          type="email"
          placeholder="이메일 주소를 입력해주세요."
          icon="/src/assets/user-email.png"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 비밀번호 입력 */}
        <div className="mt-4">
          <SigninInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            icon="/src/assets/user-password.png"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 로그인 버튼 */}
        <div className="mt-6">
          <AuthButton variant="default" onClick={() => navigate('/')}>
            로그인
          </AuthButton>
        </div>

        {/* 비밀번호 찾기와 회원가입 */}
        <div className="flex justify-end mt-4 text-[14px] text-gray-2">
          <button
            className="hover:underline"
            onClick={() => navigate('/auth/forgot-password')}
          >
            비밀번호 찾기
          </button>
        </div>

        <div className="text-center mt-6 text-[14px] text-gray-2">
          아직 링어스 회원이 아니라면?{'  '}
          <button
            className="text-primary-1 font-medium hover:underline"
            onClick={() => navigate('/auth/signup')}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
