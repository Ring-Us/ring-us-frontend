const Slide3 = () => {
  return (
    <div className="h-full-screen flex flex-col items-center justify-between text-center px-4 mb-2">
      {/* 텍스트 영역 */}
      <div className="h-[100px] flex flex-col items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          <span className="text-primary-1">경험과 가능성</span>을{' '}
          <span className="text-primary-1">하나</span>로
        </h1>
        <p className="text-sm text-gray-2">
          링어스에서 함께 배우고 성장하여 더 큰 목표를 이루어 보세요!
        </p>
      </div>

      {/* 이미지 영역 */}
      <div className="w-full h-[360px]">
        <img
          src="/src/assets/product-image.png"
          alt="Slide 1"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Slide3;
