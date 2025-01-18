import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/auth/pages/LandingPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
