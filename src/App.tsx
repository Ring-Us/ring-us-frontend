import { BrowserRouter } from 'react-router-dom';
import { Router } from '@/app/routes/Router';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
