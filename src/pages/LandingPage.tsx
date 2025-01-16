import { Header } from "../components/layout/Header";
import { Hero } from "../components/landing/Hero";
import { Last } from "../components/landing/Last";
import { Footer } from "../components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Last />
      <Footer />
    </div>
  );
}

// 지금 보면 랜딩 페이지에는 분할로 다 나눠져있는데 로그인 페이지같은경우는 한 파일에 다 들어있는 구조?
// 어떤식일때 분할을 해야하고 어떤식일때 한 페이지에 다 있어야하는지 궁금함
