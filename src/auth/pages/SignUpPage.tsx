import { useState, useEffect } from 'react';
import { Progress } from '@/global/ui';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '@/auth/api/authApi'; // 회원가입 API
import UsagePolicy from '@/auth/components/signup/UsagePolicy';
import RoleSelection from '@/auth/components/signup/RoleSelection';
import EmailVerification from '@/auth/components/signup/EmailVerification';
import CreatePassword from '@/auth/components/signup/CreatePassword';
import MentorSetup from '@/auth/components/signup/mentor/MentorSetup';
import MenteeSetup from '@/auth/components/signup/mentee/MenteeSetup';

export default function SignUpPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [role, setRole] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string | null>(null); // 수정 (null로 초기화)
  const [serviceTerms, setServiceTerms] = useState([
    { tag: 'TERMS_OF_SERVICE', agreed: false },
    { tag: 'PRIVACY_POLICY', agreed: false },
    { tag: 'MARKETING_CONSENT', agreed: false },
  ]);

  const navigate = useNavigate();

  // 현재 섹션을 다음 단계로 이동하는 함수
  const handleNext = () => {
    setCurrentSection((prev) => prev + 1);
  };

  // 약관 동의 상태 업데이트
  const updateServiceTerms = (tag: string, agreed: boolean) => {
    setServiceTerms((prev) =>
      prev.map((term) => (term.tag === tag ? { ...term, agreed } : term)),
    );
  };

  // 회원가입 API 요청 (CreatePassword 완료 후 실행)
  useEffect(() => {
    if (password) {
      handleSignUp();
    }
  }, [password]); // password가 변경될 때 실행

  const handleSignUp = async () => {
    if (!role || !password) {
      console.error('❌ 필수 정보 부족:', { role, email, password });
      return;
    }

    const formattedServiceTerms = serviceTerms.map((term) => ({
      tag: term.tag.toUpperCase(),
      agreed: Boolean(term.agreed),
    }));

    const requestData = {
      memberType: role.toUpperCase(),
      email,
      password,
      serviceTerms: formattedServiceTerms,
    };

    try {
      const response = await authApi(requestData);
      console.log('✅ 서버 응답:', response);
    } catch (error: any) {
      console.error('❌ 회원가입 오류 발생:', error.response?.data || error);
    }

    handleNext(); // 회원가입 후 다음 단계로 이동
  };

  // 기본 회원가입 단계
  const baseSections = [
    {
      component: (
        <UsagePolicy onNext={handleNext} onAgree={updateServiceTerms} />
      ),
    },
    {
      component: (
        <RoleSelection
          onNext={(selectedRole) => {
            setRole(selectedRole);
            handleNext();
          }}
        />
      ),
    },
    {
      component: (
        <EmailVerification
          onNext={(userEmail) => {
            setEmail(userEmail);
            handleNext();
          }}
        />
      ),
    },
    {
      component: (
        <CreatePassword
          onNext={(userPassword) => {
            setPassword(userPassword);
          }}
        />
      ), // 비밀번호 상태 변경 후 `useEffect` 실행
    },
  ];

  // 추가 설정 페이지 (회원가입 후 mentor/mentee 설정)
  const mentorSections = [
    { component: <MentorSetup onNext={() => navigate('/auth/finish')} /> },
  ];
  const menteeSections = [
    { component: <MenteeSetup onNext={() => navigate('/auth/finish')} /> },
  ];

  const additionalSections = role
    ? role === 'mentor'
      ? mentorSections
      : menteeSections
    : [];
  const sections = [...baseSections, ...additionalSections];

  // 진행률 계산
  const totalSteps = sections.length;
  const progressValue = (currentSection / totalSteps) * 100;

  // 뒤로 가기 버튼 처리
  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    } else {
      navigate('/auth/signin');
    }
  };

  return (
    <div className="h-screen flex flex-col px-6 relative">
      {/* 뒤로 가기 버튼 */}
      <button
        className="absolute top-8 left-3 rounded-full"
        onClick={handleBack}
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
