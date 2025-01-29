import { useState } from 'react';
import { Progress } from '@/global/ui';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UsagePolicy from '@/auth/components/signup/UsagePolicy';
import RoleSelection from '@/auth/components/signup/RoleSelection';
import EmailVerification from '@/auth/components/signup/EmailVerification';
import CreatePassword from '@/auth/components/signup/CreatePassword';
import MentorSetup from '@/auth/components/signup/mentor/MentorSetup';
import MenteeSetup from '@/auth/components/signup/mentee/MenteeSetup';

export default function SignUpPage() {
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 상태
  const [role, setRole] = useState<string | null>(null); // 역할 상태 (mentor or mentee)
  const [mentorStep, setMentorStep] = useState(0); // MentorSetup 단계 상태
  const [menteeStep, setMenteeStep] = useState(0); // MenteeSetup 단계 상태
  const navigate = useNavigate();

  // 기본 섹션 정의
  const baseSections = [
    { component: <UsagePolicy onNext={() => setCurrentSection(1)} /> },
    {
      component: (
        <RoleSelection
          onNext={(selectedRole) => {
            setRole(selectedRole); // 역할 설정
            setCurrentSection(2);
          }}
        />
      ),
    },
    { component: <EmailVerification onNext={() => setCurrentSection(3)} /> },
    { component: <CreatePassword onNext={() => setCurrentSection(4)} /> },
  ];

  // 역할에 따른 추가 섹션
  const additionalSections =
    role === 'mentor'
      ? [
          {
            component: (
              <MentorSetup
                currentStep={mentorStep}
                setCurrentStep={setMentorStep}
                onNext={() => navigate('/auth/finish')}
              />
            ),
          },
        ]
      : role === 'mentee'
        ? [
            {
              component: (
                <MenteeSetup
                  currentStep={menteeStep}
                  setCurrentStep={setMenteeStep}
                  onNext={() => navigate('/auth/finish')}
                />
              ),
            },
          ]
        : [];

  const sections = [...baseSections, ...additionalSections]; // 전체 섹션 배열

  const handleBack = () => {
    if (role === 'mentor' && currentSection === sections.length - 1) {
      if (mentorStep > 0) {
        setMentorStep((prev) => prev - 1);
      } else {
        setCurrentSection((prev) => prev - 1);
      }
    } else if (role === 'mentee' && currentSection === sections.length - 1) {
      if (menteeStep > 0) {
        setMenteeStep((prev) => prev - 1);
      } else {
        setCurrentSection((prev) => prev - 1);
      }
    } else if (currentSection === 0) {
      navigate('/auth/signin'); // 첫 번째 섹션에서 뒤로 가기 -> 로그인 화면으로 이동
    } else {
      setCurrentSection((prev) => prev - 1); // 이전 섹션으로 이동
    }
  };

  return (
    <div className="h-screen flex flex-col px-6 relative">
      {/* 뒤로가기 버튼 */}
      <button
        className="absolute top-8 left-3 rounded-full"
        onClick={handleBack}
      >
        <ArrowLeft className="w-6 h-6 text-gray-1" />
      </button>

      {/* Progress Bar */}
      <div className="flex justify-center mt-24">
        <Progress
          value={
            role === 'mentor'
              ? ((currentSection + mentorStep / 3) / sections.length) * 100
              : role === 'mentee'
                ? ((currentSection + menteeStep / 2) / sections.length) * 100
                : (currentSection / sections.length) * 100
          }
          className="w-full rounded-md"
        />
      </div>

      {/* 현재 섹션 렌더링 */}
      <div className="h-full flex justify-start">
        {sections[currentSection]?.component}
      </div>
    </div>
  );
}
