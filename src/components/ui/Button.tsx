import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 font-semibold text-white rounded-md transition-colors",
        className // className 병합 추가
      )}
      {...props}
    >
      {children}
    </button>
  );
}
