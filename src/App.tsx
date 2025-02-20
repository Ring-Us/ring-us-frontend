import { useEffect, useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Router } from '@/app/routes/Router';
import SplashScreen from '@/auth/components/SplashScreen'; // 경로 수정
import { useAuthStore } from '@/auth/store/useAuthStore';

export default function App() {
  const { isAuthenticated, checkSession } = useAuthStore(); // ✅ 로그인 상태 확인
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initialize() {
      await checkSession(); // ✅ 세션 확인 (비동기)
      console.log('✅ 현재 로그인 상태:', isAuthenticated); // ✅ 세션 확인 후 상태 출력

      // ✅ checkSession 완료 후 로딩 해제
      setTimeout(() => setIsLoading(false), 2000);
    }
    initialize();
  }, []);

  return (
    <BrowserRouter>{isLoading ? <SplashScreen /> : <Router />}</BrowserRouter>
  );
}
