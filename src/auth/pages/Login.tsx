import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* 로고 */}
      <div className="mb-2">
        <Link to="/">
          <img src={Logo} alt="RING US Logo" className="w-28 md:w-60 mx-auto" />
        </Link>
      </div>

      {/* 로그인 폼 */}
      <div className=" bg-transparent rounded-lg mt-10 md:mt-0 w-full max-w-xs md:max-w-md">
        <div className="space-y-4">
          <input
            type="email"
            placeholder="이메일 주소를 입력해주세요."
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3 rounded-lg transition">
            로그인
          </button>
        </div>

        <div className="text-right mt-2">
          <Link to="#" className="text-gray-500 text-sm hover:underline">
            비밀번호 찾기
          </Link>
        </div>

        <div className="text-center mt-6 text-sm">
          <span className="text-gray-600">아직 링어스 회원이 아니라면? </span>
          <Link
            to="/signup"
            className="text-indigo-600 font-semibold hover:underline"
          >
            회원가입
          </Link>
        </div>
      </div>

      {/* 모바일 전용 네비게이션 바 (PC에서는 숨김) */}
      <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around py-3 border-t border-gray-200 md:hidden">
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          홈
        </Link>
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          링어스
        </Link>
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          멘토링
        </Link>
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          신청현황
        </Link>
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          고객센터
        </Link>
      </div>
    </div>
  );
}
