import { Button } from '@/global/ui';

const variantClasses = {
  default: 'bg-primary-1',
  secondary: 'bg-primary-2',
};

interface ButtonProps {
  variant?: 'default' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void; // onClick 속성 추가
}

export function AuthButton({
  variant = 'default',
  children,
  onClick,
}: ButtonProps) {
  return (
    <Button
      className={`${variantClasses[variant]} w-full h-[55px] rounded-lg font-semiBold text-[16px] font-white hover:bg-primary-1`}
      onClick={onClick} // 전달된 onClick 핸들러 적용
      disabled={variant === 'secondary'}
    >
      {children}
    </Button>
  );
}
