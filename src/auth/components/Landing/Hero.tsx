import { Button } from '../../global/ui/Button';

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-white text-center">
      <div className="w-full max-w-[80%] md:max-w-[768px]">
        <div className="bg-gradient-to-b from-white to-indigo-200 rounded-2xl shadow-lg p-10 text-center mb-10">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
            나의 취업루트
            <br /> 링어스에서 알아보자
          </h1>
          <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md">
            시작하기
          </Button>
        </div>
        <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 text-center">
          우리 학과&#183;학교 선배들의 취업 정보부터 멘토링까지
          <br />
          링어스에서 모두 확인하세요.
        </h3>
      </div>
    </section>
  );
};
