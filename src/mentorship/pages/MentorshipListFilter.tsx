import React, { useEffect } from 'react';
import closeIcon from '/src/assets/close.png';

interface MentorshipListFilterProps {
  filterType: string;
  onClose: () => void;
  selectedField: string | null;
  onFieldSelect: (field: string) => void;
  selectedSubField: string | null;
  onSubFieldSelect: (field: string | null) => void;
  selectedYear: string | null;
  onYearSelect: (year: string | null) => void;
}

const fieldOptions: string[] = [
  '전체',
  '마케팅',
  '서비스 기획',
  '디자인',
  '개발',
  '대학원',
  '인사',
  '영업',
  '금융',
  '데이터',
  '의료',
  '법률',
];

const subFieldOptions: { [key: string]: string[] } = {
  '전체': [],
  '마케팅': ['퍼포먼스 마케팅', '소셜 미디어 마케팅', '브랜딩', '프로모션 마케팅'],
  '서비스 기획': ['시장 조사', '제품 기획', '전략 기획'],
  '디자인': ['UI/UX 디자인', '그래픽 디자인', '브랜드 디자인'],
  '개발': ['프론트엔드', '백엔드', '모바일 개발', 'AI/ML 개발'],
  '대학원': ['석사 과정', '박사 과정'],
  '인사': ['인재 관리', '채용 담당', '교육 및 훈련'],
  '영업': ['B2B 영업', 'B2C 영업', '영업 전략'],
  '금융': ['투자 분석', '리스크 관리', '자산 관리'],
  '데이터': ['데이터 분석', '데이터 엔지니어링', '데이터 시각화'],
  '의료': ['의료 데이터 분석', '임상 연구', '의료 기기 개발'],
  '법률': ['법률 자문', '계약 검토', '컴플라이언스 관리'],
};

const yearOptions: string[] = ['1년차', '2년차', '3년차', '4년차', '5년차', '6년차', '7년차', '8년차', '9년차', '10년차 이상'];

const MentorshipListFilter: React.FC<MentorshipListFilterProps> = ({
  filterType,
  onClose,
  selectedField,
  onFieldSelect,
  selectedSubField,
  onSubFieldSelect,
  selectedYear,
  onYearSelect,
}) => {
  useEffect(() => {
    // '직무/세부직무'가 아닌 경우 세부직무 선택값 초기화
    if (filterType !== '직무/세부직무') {
      onSubFieldSelect(null);
    }
    // '경력'이 아닌 경우 경력 선택값 초기화
    if (filterType !== '경력') {
      onYearSelect(null);
    }
  }, [filterType, onSubFieldSelect, onYearSelect]);

  return (
    <div className="fixed top-0 left-50% w-full max-w-[600px] h-full bg-[#000] bg-opacity-75 flex justify-center items-end z-50">
      <div className="bg-[#fff] w-full h-[366px] rounded-t-[20px] p-4">
        <div className="pl-3">
          {/* 필터 제목 */}
          <div className="flex justify-between items-center">
            <h2 className="text-[16px] font-bold">
              {filterType === '분야' && '분야 선택'}
              {filterType === '직무/세부직무' && '세부직무 선택'}
              {filterType === '경력' && '경력 선택'}
            </h2>
            {/* 닫기 버튼 */}
            <button onClick={onClose} className="p-1">
              <img src={closeIcon} alt="닫기 버튼" className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>

        {/* 분야 필터 */}
        {filterType === '분야' && (
          <div className="grid grid-cols-3 gap-[11px] mt-[34px] gap-y-[13px] h-[43px]">
            {fieldOptions.map((field) => (
              <button
                key={field}
                onClick={() => {
                  onFieldSelect(field);
                  onClose();
                }}
                className={`p-[12px] border rounded-[8px] text-[14px] text-center ${
                  selectedField === field ? 'border-primary-1 text-primary-1' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {field}
              </button>
            ))}
          </div>
        )}

        {/* 세부직무 필터 */}
        {filterType === '직무/세부직무' && (
          <div className="grid grid-cols-3 gap-[12px] mt-[16px]">
            {selectedField && subFieldOptions[selectedField] && subFieldOptions[selectedField].length > 0 ? (
              subFieldOptions[selectedField].map((subField) => (
                <button
                  key={subField}
                  onClick={() => {
                    onSubFieldSelect(subField);
                    onClose();
                  }}
                  className={`p-[12px] border rounded-[8px] text-[14px] text-center ${
                    selectedSubField === subField ? 'border-primary-1 text-primary-1' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {subField}
                </button>
              ))
            ) : (
              <div className="text-center col-span-3 text-gray-600">먼저 분야를 선택해주세요.</div>
            )}
          </div>
        )}

        {/* 경력 필터 */}
        {filterType === '경력' && (
          <div className="grid grid-cols-3 gap-[12px] mt-[16px]">
            {yearOptions.map((year) => (
              <button
                key={year}
                onClick={() => {
                  onYearSelect(year);
                  onClose();
                }}
                className={`p-[12px] border rounded-[8px] text-[14px] text-center ${
                  selectedYear === year ? 'border-primary-1 text-primary-1' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorshipListFilter;