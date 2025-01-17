import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/auth/pages/LandingPage';
import Login from '@/auth/pages/Login';
import Signup from '@/auth/pages/Signup';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
