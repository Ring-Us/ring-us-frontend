import { AuthButton } from '@/auth/components/AuthButton';
import { Progress } from '@/global/ui/progress';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center">Home Page</h1>
      <AuthButton>다음으로</AuthButton>
      <Progress value={33} className=" h-[6px]" />
    </div>
  );
}
