import { useState } from 'react';
import { Progress } from '@/global/ui';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UsagePolicy from '@/auth/components/signup/UsagePolicy';
import RoleSelection from '@/auth/components/signup/RoleSelection';

export default function SignUpPage() {
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 상태
  const navigate = useNavigate();

  const sections = [
    { component: <UsagePolicy onNext={() => setCurrentSection(1)} /> }, // 첫 번째 섹션
    { component: <RoleSelection onNext={() => navigate('/auth/finish')} /> }, // 두 번째 섹션
  ];

  return (
    <div className="h-screen flex flex-col px-6 relative">
      {/* 뒤로가기 버튼 */}
      <button
        className="absolute top-8 left-3 rounded-full hover:bg-gray-200"
        onClick={() => navigate(-1)} // React Router를 이용한 뒤로가기
      >
        <ArrowLeft className="w-6 h-6 text-gray-1" />
      </button>

      {/* Progress Bar */}
      <div className="flex justify-center mt-24">
        <Progress
          value={(currentSection / sections.length) * 100}
          className="w-full rounded-md"
        />
      </div>

      {/* 현재 섹션 렌더링 */}
      <div className="h-full flex justify-start">
        {sections[currentSection].component}
      </div>
    </div>
  );
}
