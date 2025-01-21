const Slide2 = () => {
  return (
    <div className="h-full-screen flex flex-col items-center justify-between text-center px-4 mb-2">
      {/* 텍스트 영역 */}
      <div className="h-[100px] flex flex-col items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          믿을수 있는
          <span className="text-primary-1">
            <br /> 멘토링 플랫폼!
          </span>
        </h1>
        <p className="text-sm text-gray-2">
          성장과 성공을 위한 첫걸음, 링어스에서 시작하세요.
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

export default Slide2;
