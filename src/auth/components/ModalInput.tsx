import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface ModalInputProps {
  label: string; // 라벨
  placeholder: string; // 플레이스홀더 텍스트
  options: string[]; // 선택 가능한 옵션
  value: string; // 현재 선택된 값
  onChange: (value: string) => void; // 선택 시 호출될 핸들러
}

const ModalInput: React.FC<ModalInputProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태

  return (
    <div className="relative">
      {/* 라벨 */}
      <label className="text-[14px] mb-2 block">{label}</label>

      {/* 클릭 가능한 인풋 박스 */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="w-full h-[45px] border-b-[2px] flex items-center justify-between cursor-pointer pl-2"
      >
        <span
          className={`text-sm ${value ? 'text-base' : 'text-gray-2'} truncate`}
        >
          {value || placeholder}
        </span>
        <ChevronDown className="text-gray-1 mr-3" size={18} />
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed left-1/2 transform -translate-x-1/2 max-w-[600px]  inset-0 z-50 bg-[#171717] bg-opacity-50">
          {/* 모달 본문 */}
          <div className="fixed left-1/2 bottom-0 w-full transform -translate-x-1/2 h-[calc(100vh-50vh)] max-w-[600px] bg-[#ffffff] rounded-t-[30px] overflow-hidden overflow-y-auto">
            {/* 닫기 버튼 */}
            <div className="flex items-center justify-end px-4 py-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-2 hover:text-gray-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* 옵션 리스트 */}
            <ul className="flex-1 overflow-y-auto px-4 pb-6">
              {options.map((option) => (
                <li
                  key={option}
                  className="py-2 pl-4 hover:bg-gray-3 cursor-pointer"
                  onClick={() => {
                    onChange(option); // 선택된 값을 상위로 전달
                    setIsModalOpen(false); // 모달 닫기
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalInput;
