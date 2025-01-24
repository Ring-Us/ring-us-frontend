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
      <div className="w-full max-w-[600px] space-y-4">
        {/* 이메일 입력 */}
        <SigninInput
          type="email"
          placeholder="이메일 주소를 입력해주세요."
          icon="user" // ✅ icon 추가
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 비밀번호 입력 */}
        <SigninInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          icon="lock" // ✅ icon 추가
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 로그인 버튼 */}
        <AuthButton onClick={() => navigate('/dashboard')}>로그인</AuthButton>
      </div>
    </div>
  );
}
