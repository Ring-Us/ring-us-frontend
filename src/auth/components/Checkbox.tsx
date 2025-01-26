import React from 'react';

interface CheckboxWithLabelProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
  type?: 'required' | 'optional'; // '필수' 또는 '선택' 지정
  onDetailClick?: () => void; // 상세보기 버튼 클릭 핸들러
}

const Checkbox: React.FC<CheckboxWithLabelProps> = ({
  label,
  isChecked,
  onChange,
  type = 'optional', // 기본값은 '선택'
  onDetailClick,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="w-5 h-5 accent-primary-1"
        />
        <label className="ml-2 text-[14px] sm:text-[16px] 2xl:text-[18px]">
          {type === 'required' && <span>(필수) </span>}
          {type === 'optional' && <span>(선택) </span>}
          {label}
        </label>
      </div>
      {onDetailClick && (
        <button
          onClick={onDetailClick}
          className="text-[12px] sm:text-[14px] text-gray-2 hover:underline"
        >
          상세보기
        </button>
      )}
    </div>
  );
};

export default Checkbox;
