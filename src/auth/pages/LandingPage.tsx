import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/auth/pages/LandingStyle.css';
import { useNavigate } from 'react-router-dom';
import Slide1 from '../components/landing/Slide1';
import Slide2 from '../components/landing/Slide2';
import Slide3 from '../components/landing/Slide3';
import Slide4 from '../components/landing/Slide4';
import { AuthButton } from '@/auth/components/AuthButton';

// 쿠키 관리 유틸리티 함수
const handleCookie = {
  setCookie: (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  },
  getCookie: (name: string) => {
    const match = document.cookie.match(`(^|;)\\s*${name}=([^;]+)`);
    return match ? match[2] : null;
  },
};

export default function LandingPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // 방문 기록 확인 (쿠키 존재 여부 확인)
    const hasVisited = handleCookie.getCookie('landing_visited');
    if (hasVisited) {
      navigate('/auth/signin'); // 이미 방문한 경우 로그인 페이지로 리디렉트
    }
  }, [navigate]);

  const handleFinish = () => {
    handleCookie.setCookie('landing_visited', 'true', 1); // 1일 동안 유지
    navigate('/auth/signup'); // 회원가입 페이지로 이동
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    appendDots: (dots: any) => (
      <div className="absolute w-full">
        <ul className="relative bottom">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="w-full max-w-[600px] h-[calc(100vh-30vh)] px-2">
        <Slider {...settings}>
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </Slider>
      </div>

      {currentSlide !== 3 ? (
        <button
          className="absolute bottom-10 right-10 text-sm hover:underline"
          onClick={() => {
            handleCookie.setCookie('landing_visited', 'true', 1); // 1일 동안 다시 안 보이게 설정
            navigate('/auth/signin');
          }}
        >
          건너뛰기
        </button>
      ) : null}

      {currentSlide === 3 && (
        <div className="absolute bottom-14 left-5 right-5">
          <AuthButton variant="default" onClick={handleFinish}>
            지금 시작하기
          </AuthButton>
        </div>
      )}
    </div>
  );
}
