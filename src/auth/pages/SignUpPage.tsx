import { useState, useEffect } from 'react';
import { Progress } from '@/global/ui';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '@/auth/api/authApi'; // 회원가입 API
import UsagePolicy from '@/auth/components/signup/UsagePolicy';
import RoleSelection from '@/auth/components/signup/RoleSelection';
import EmailVerification from '@/auth/components/signup/EmailVerification';
import CreatePassword from '@/auth/components/signup/CreatePassword';

export default function SignUpPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [role, setRole] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string | null>(null);
  const [serviceTerms, setServiceTerms] = useState([
    { tag: 'TERMS_OF_SERVICE', agreed: false },
    { tag: 'PRIVACY_POLICY', agreed: false },
    { tag: 'MARKETING_CONSENT', agreed: false },
  ]);

  const navigate = useNavigate();

  // 약관 동의 상태 업데이트
  const updateServiceTerms = (tag: string, agreed: boolean) => {
    setServiceTerms((prev) =>
      prev.map((term) => (term.tag === tag ? { ...term, agreed } : term)),
    );
  };

  // 회원가입 API 요청
  const handleSignUp = async () => {
    if (!role || !password) {
      console.error('❌ 필수 정보 부족:', { role, email, password });
      return;
    }

    const requestData = {
      memberType: role.toUpperCase(),
      email,
      password,
      serviceTerms: serviceTerms.map((term) => ({
        tag: term.tag.toUpperCase(),
        agreed: Boolean(term.agreed),
      })),
    };

    try {
      const response = await authApi(requestData);
      console.log('✅ 회원가입 성공:', response);

      // 회원가입 성공 시 `/auth/finish`로 이동
      navigate('/auth/finish');
    } catch (error: any) {
      console.error('❌ 회원가입 오류:', error.response?.data || error);
    }
  };

  // 비밀번호가 설정되면 `handleSignUp()` 실행
  useEffect(() => {
    if (password) {
      handleSignUp();
    }
  }, [password]);

  // 회원가입 단계 정의
  const sections = [
    {
      component: (
        <UsagePolicy
          onNext={() => setCurrentSection(1)}
          onAgree={updateServiceTerms}
        />
      ),
    },
    {
      component: (
        <RoleSelection
          onNext={(selectedRole) => {
            setRole(selectedRole);
            setCurrentSection(2);
          }}
        />
      ),
    },
    {
      component: (
        <EmailVerification
          onNext={(userEmail) => {
            setEmail(userEmail);
            setCurrentSection(3);
          }}
        />
      ),
    },
    {
      component: (
        <CreatePassword onNext={(userPassword) => setPassword(userPassword)} />
      ),
    }, // 비밀번호 설정 후 자동 회원가입
  ];

  // 진행률 계산
  const progressValue = (currentSection / sections.length) * 100;

  return (
    <div className="h-screen flex flex-col px-6 relative">
      {/* 뒤로 가기 버튼 */}
      <button
        className="absolute top-8 left-3 rounded-full"
        onClick={() => setCurrentSection((prev) => Math.max(0, prev - 1))}
      >
        <ArrowLeft className="w-6 h-6 text-gray-1" />
      </button>

      {/* 진행률 표시 */}
      <div className="flex justify-center mt-24">
        <Progress value={progressValue} className="w-full rounded-md" />
      </div>

      {/* 현재 섹션 렌더링 */}
      <div className="h-full flex justify-start">
        {sections[currentSection]?.component}
      </div>
    </div>
  );
}
