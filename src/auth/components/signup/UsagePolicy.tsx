import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthButton } from '@/auth/components/AuthButton';
import Checkbox from '@/auth/components/Checkbox';

const UsagePolicy = ({ onNext }: { onNext: () => void }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const isAllRequiredChecked = checkedItems.terms && checkedItems.privacy;

  const handleAllCheck = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setCheckedItems({
      terms: newCheckedState,
      privacy: newCheckedState,
      marketing: newCheckedState,
    });
  };

  const handleSingleCheck = (name: string) => {
    setCheckedItems((prev: any) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  React.useEffect(() => {
    setAllChecked(
      checkedItems.terms && checkedItems.privacy && checkedItems.marketing,
    );
  }, [checkedItems]);

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col w-full">
      <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold mt-10">
        서비스 이용 약관에 <br /> 동의해 주세요.
      </h3>

      <div className="mt-12 space-y-5">
        {/* 전체 동의 */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={handleAllCheck}
            className="w-5 h-5 accent-primary-1"
          />
          <label className="ml-2 text-[14px] sm:text-[16px] 2xl:text-[18px]">
            네, 모두 동의합니다.
          </label>
        </div>
        <hr />

        {/* 개별 약관 */}
        <div className="space-y-4 py-4">
          <Checkbox
            label="링어스 이용약관"
            isChecked={checkedItems.terms}
            type="required"
            onChange={() => handleSingleCheck('terms')}
            onDetailClick={() => alert('링어스 이용약관 상세보기')} //임시
          />

          <Checkbox
            label="개인정보 수집 및 이용 동의"
            isChecked={checkedItems.privacy}
            type="required"
            onChange={() => handleSingleCheck('privacy')}
            onDetailClick={() => alert('개인정보 수집 및 이용 동의 상세보기')} //임시
          />

          <Checkbox
            label="마케팅 정보 수신"
            isChecked={checkedItems.marketing}
            type="optional"
            onChange={() => handleSingleCheck('marketing')}
            onDetailClick={() => alert('마케팅 정보 수신 상세보기')} //임시
          />
        </div>
      </div>

      <div className="absolute bottom-16 w-full">
        <AuthButton
          variant={isAllRequiredChecked ? 'default' : 'secondary'}
          onClick={onNext} // 다음 섹션으로 이동
        >
          다음으로
        </AuthButton>
      </div>
    </div>
  );
};

export default UsagePolicy;
