const Slide1 = () => {
  return (
    <div className="h-full-screen flex flex-col items-center justify-between text-center px-4 mb-2">
      {/* 텍스트 영역 */}
      <div className="h-[100px] flex flex-col items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          언제 어디서나
          <span className="text-primary-1">
            <br /> 손쉽게 연결하세요!
          </span>
        </h1>
        <p className="text-sm text-gray-2">
          멘토와 멘티를 간편하게 이어주는 <br />
          링어스에서 당신의 시간을 가치 있게 만들어보세요.
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

export default Slide1;
