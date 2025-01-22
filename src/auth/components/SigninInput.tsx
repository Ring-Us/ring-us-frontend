interface SigninInputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  icon: string; // 아이콘을 이미지 경로로 받기
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SigninInput({
  type,
  placeholder,
  icon,
  value,
  onChange,
}: SigninInputProps) {
  return (
    <div className="flex items-center w-full h-[55px] px-4 border rounded-md border-gray-300 focus-within:border-primary-1">
      {/* 이미지 아이콘 */}
      <div className="mr-4">
        <img src={icon} alt="icon" className="w-5 h-5" />
      </div>
      {/* 입력 필드 */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}
