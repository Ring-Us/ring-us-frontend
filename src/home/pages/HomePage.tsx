import { AuthButton } from '@/auth/components/AuthButton';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center">Home Page</h1>
      <AuthButton>다음으로</AuthButton>
    </div>
  );
}
