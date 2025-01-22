import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/auth/pages/LandingStyle.css';
import { useNavigate } from 'react-router-dom';
import Slide1 from '../components/landing/Slide1';
import Slide2 from '../components/landing/Slide2';
import Slide3 from '../components/landing/Slide3';
import Slide4 from '../components/landing/Slide4';

export default function LandingPage() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots: any) => (
      <div className="absolute">
        <ul className="h-[60px] max-420:h-[170px]">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* 슬라이더 중앙 배치 */}
      <div className="w-full max-w-[600px] px-2">
        <Slider {...settings}>
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </Slider>
      </div>

      {/* 건너뛰기 버튼 오른쪽 하단 배치 */}
      <button
        className="absolute bottom-5 right-5 text-sm text-gray-500 hover:underline"
        onClick={() => navigate('/auth/signin')} // 버튼 클릭 시 /signin으로 이동
      >
        건너뛰기
      </button>
    </div>
  );
}
