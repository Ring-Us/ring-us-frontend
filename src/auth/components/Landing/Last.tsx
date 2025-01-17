import { Button } from '../../global/ui/Button';

export const Last = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-10 bg-white text-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight md:text-4xl">
          만남이 이어짐으로
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base leading-relaxed">
          링어스를 통해 만나는 <br /> 우리 학교 선배와의 유익한 대화의 기회
          <br /> 지금 바로 시작해보세요
        </p>
      </div>
      <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md">
        시작하기
      </Button>
    </section>
  );
};
