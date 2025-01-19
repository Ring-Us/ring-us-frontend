import { Button } from '../../global/ui/button';

const variantClasses = {
  default: 'bg-primary-1',
  secondary: 'bg-primary-2',
};

interface ButtonProps {
  variant?: 'default' | 'secondary';
  children: React.ReactNode;
}

export function AuthButton({ variant = 'default', children }: ButtonProps) {
  return (
    <Button
      className={`${variantClasses[variant]} w-full h-[55px] rounded-md font-semiBold text-[16px] font-white`}
    >
      {children}
    </Button>
  );
}
