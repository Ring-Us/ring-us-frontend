import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="hidden md:block sticky top-0 z-50 backdrop-blur-lg bg-white/60 shadow-md">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* 로고 */}
          <Link to="/">
            <img src={Logo} alt="Saas Logo" className="w-16 h-16" />
          </Link>

          {/* 모바일 메뉴 아이콘 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={MenuIcon} alt="Menu Icon" className="w-6 h-6" />
          </button>

          {/* 내비게이션 메뉴 (데스크탑용) */}
          <nav className="hidden md:flex gap-6 items-center text-gray-700">
            <Link to="#" className="hover:text-black">
              링어스
            </Link>
            <Link to="#" className="hover:text-black">
              멘토링
            </Link>
            <Link to="#" className="hover:text-black">
              신청현황
            </Link>
            <Link to="#" className="hover:text-black">
              고객센터
            </Link>
            <Link to="/login" className="text-indigo-500 font-medium">
              로그인
            </Link>
            <Button
              onClick={() => navigate("/signup")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl"
            >
              회원가입
            </Button>
          </nav>
        </div>
      </div>

      {/* 모바일 메뉴 (토글) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <nav className="flex flex-col items-center gap-4 text-gray-700">
            <Link to="#" className="hover:text-black">
              링어스
            </Link>
            <Link to="#" className="hover:text-black">
              멘토링
            </Link>
            <Link to="#" className="hover:text-black">
              신청현황
            </Link>
            <Link to="#" className="hover:text-black">
              고객센터
            </Link>
            <Link to="/login" className="text-indigo-500 font-medium">
              로그인
            </Link>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl">
              회원가입
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
