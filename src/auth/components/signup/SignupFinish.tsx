export default function SignupFinish() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6">
      <img
        className="w-full p-5 mb-3"
        src="/src/assets/success.png"
        alt="success"
      />
      <h1 className="text-2xl sm:text-3xl 2xl:text-3xl font-bold mb-2">
        링어스 가입을 축하드려요
      </h1>
      <div className="flex items-center mb-6">
        <img
          className="mr-1 w-[55px]"
          src="/src/assets/RINGUS.png"
          alt="ringus"
        />
        <p className="text-[13px] sm:text-md text-gray-1">
          와 함께 성장의 여정을 시작하세요.
        </p>
      </div>
    </div>
  );
}
