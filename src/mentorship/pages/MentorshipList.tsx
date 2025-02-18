import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '/src/assets/Profile.png';
import searchIcon from '/src/assets/search.png';
import downIcon from '/src/assets/down.png';
import star from '/src/assets/star.png';
import bookmark from '/src/assets/bookmark.png';
import bookmarkSaved from '/src/assets/bookmarksaved.png';
import marketingImg from '/src/assets/marketingImg.png';
import homeIcon from '/src/assets/footer_home.png';
import ringusIcon from '/src/assets/footer_ringus.png';
import mentoringIcon from '/src/assets/footer_mentoring.png';
import currentIcon from '/src/assets/footeer_current.png';
import serviceIcon from '/src/assets/footer_service.png';
import MentorshipListFilter from './MentorshipListFilter';

const mentorshipData = [
  { mName: '트레블', mJob: '퍼포먼스 마케팅 / 프로모션 마케팅', mYear: '5년차', mStar: 5.0, review: 235, respond: '98%', intro: '“퍼포먼스 마케팅에 대해 알려드립니다.”' },
  { mName: '트레블2', mJob: '소셜 미디어 마케팅 / 브랜딩', mYear: '7년차', mStar: 4.8, review: 180, respond: '50%', intro: '“소셜 미디어 최적화와 브랜딩 노하우를 알려드립니다.”' },
  { mName: '트레블3', mJob: '시장 조사 / 제품 기획', mYear: '3년차', mStar: 4.5, review: 120, respond: '70%', intro: '“시장 조사 및 제품 기획에 관한 경험을 공유합니다.”' },
  { mName: '트레블4', mJob: 'UI/UX 디자인 / 그래픽 디자인', mYear: '5년차', mStar: 4.7, review: 210, respond: '85%', intro: '“UI/UX 디자인의 최신 트렌드를 안내합니다.”' },
  { mName: '트레블5', mJob: '프론트엔드 개발 / 백엔드 개발', mYear: '7년차', mStar: 4.9, review: 300, respond: '90%', intro: '“웹 개발에 필요한 기술들을 알려드립니다.”' },
  { mName: '트레블6', mJob: '모바일 개발 / AI/ML 개발', mYear: '3년차', mStar: 4.2, review: 150, respond: '65%', intro: '“모바일 앱 및 AI/ML 개발에 대해 경험을 공유합니다.”' },
  { mName: '트레블7', mJob: '소셜 미디어 마케팅 / 브랜딩', mYear: '5년차', mStar: 4.6, review: 190, respond: '80%', intro: '“브랜딩 전략과 소셜 미디어 마케팅에 관해 설명합니다.”' },
  { mName: '트레블8', mJob: '데이터 분석 / 데이터 엔지니어링', mYear: '7년차', mStar: 4.8, review: 220, respond: '88%', intro: '“데이터 분석과 엔지니어링의 노하우를 공유합니다.”' },
  { mName: '트레블9', mJob: '의료 데이터 분석 / 임상 연구', mYear: '5년차', mStar: 4.5, review: 160, respond: '75%', intro: '“의료 분야의 데이터 분석과 임상 연구를 소개합니다.”' },
  { mName: '트레블10', mJob: '법률 자문 / 계약 검토', mYear: '7년차', mStar: 4.9, review: 280, respond: '95%', intro: '“법률 자문과 계약 검토에 대해 전문적인 조언을 드립니다.”' }
];

const MentorshipList = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMentors, setFilteredMentors] = useState(mentorshipData);
  const [sortOption, setSortOption] = useState('review');
  const [filterType, setFilterType] = useState<string | null>(null);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedSubField, setSelectedSubField] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // 북마크 상태: 각 멘토의 mName을 키로 저장 (true면 저장됨)
  const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({});

  // 스크롤 되는 멘토 리스트 영역에 대한 ref
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // 마지막 스크롤 위치를 useRef로 관리
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;
      if (currentScrollY > lastScrollYRef.current) {
        // 스크롤을 아래로 내릴 때 (scroll down)
        setIsFooterVisible(false);
      } else {
        // 스크롤을 위로 올릴 때 (scroll up)
        setIsFooterVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = mentorshipData.filter((mentor) =>
      mentor.mName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.mJob.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.intro.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedYear) {
      filtered = filtered.filter((mentor) => mentor.mYear === selectedYear);
    }
    if (selectedField && selectedField !== '전체') {
      filtered = filtered.filter((mentor) => mentor.mJob.includes(selectedField));
    }
    if (selectedSubField) {
      filtered = filtered.filter((mentor) => mentor.mJob.includes(selectedSubField));
    }
    filtered.sort((a, b) => {
      if (sortOption === 'review') {
        return b.review - a.review;
      } else if (sortOption === 'respond') {
        return parseFloat(b.respond) - parseFloat(a.respond);
      } else if (sortOption === 'mStar') {
        return b.mStar - a.mStar;
      }
      return 0;
    });

    setFilteredMentors(filtered);
  }, [searchTerm, sortOption, selectedYear, selectedField, selectedSubField]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleFilterClick = (filterName: string) => {
    if (filterName === '직무/세부직무' && !selectedField) {
      alert('먼저 분야를 선택해주세요!');
    } else {
      setFilterType(filterName);
    }
  };

  const toggleBookmark = (mName: string) => {
    setBookmarked((prevState) => ({
      ...prevState,
      [mName]: !prevState[mName],
    }));
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 relative">
      {/* 고정 헤더 영역 */}
      <div className="fixed top-0 w-full max-w-[600px] mx-auto bg-gray-100 z-20">
        <div className="w-full max-w-2xl mt-[16px] px-4">
          <div className="w-full p-2 h-[48px] flex items-center bg-gray-6 rounded-[30px]">
            <img src={searchIcon} alt="검색 아이콘" className="w-6 h-6 ml-2 mr-1" />
            <input
              type="text"
              placeholder="회사, 직무, 학과, 닉네임으로 검색하기"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-1 text-[16px] text-gray-900 placeholder-gray-7 focus:outline-none bg-muted"
            />
          </div>
        </div>

        <div className="w-full max-w-2xl px-4 pt-4 pb-[4px] mt-[16px]">
          <div className="flex items-center gap-[14px]">
            <div className="text-[32px] font-bold text-primary-1">마케팅</div>
            <img src={marketingImg} alt="마케팅 이미지" className="w-[44px] h-[44px]" />
          </div>
          <div className="flex items-center justify-between mt-[21px]">
            <div className="flex space-x-2">
              {/* 분야 필터 버튼 */}
              <button
                onClick={() => handleFilterClick('분야')}
                className="px-4 py-1 border-[1px] border-gray-2 rounded-[30px] text-gray-2 text-[12px] flex items-center"
              >
                {selectedField ? selectedField : '분야'}
                <img src={downIcon} alt="다운 아이콘" className="w-5 h-5 ml-1" />
              </button>

              {/* 직무/세부직무 필터 버튼 */}
              <button
                onClick={() => handleFilterClick('직무/세부직무')}
                className="px-4 py-1 border-[1px] border-gray-2 rounded-[30px] text-gray-2 text-[12px] flex items-center"
              >
                {selectedSubField ? selectedSubField : '직무/세부직무'}
                <img src={downIcon} alt="다운 아이콘" className="w-5 h-5 ml-1" />
              </button>

              {/* 경력 필터 버튼 */}
              <button
                onClick={() => handleFilterClick('경력')}
                className="px-4 py-1 border-[1px] border-gray-2 rounded-[30px] text-gray-2 text-[12px] flex items-center"
              >
                {selectedYear ? selectedYear : '경력'}
                <img src={downIcon} alt="다운 아이콘" className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[600px] w-full flex justify-end items-center mt-[16px] px-4">
          <label className="relative flex items-center">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="text-[12px] text-gray-2 appearance-none cursor-pointer focus:outline-none w-full pr-[26px]"
              style={{
                backgroundImage: `url(${downIcon})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: '24px 24px',
              }}
            >
              <option value="review">후기 많은 순</option>
              <option value="respond">응답률 높은 순</option>
              <option value="mStar">별점 높은 순</option>
            </select>
          </label>
        </div>
      </div>

      {/* 스크롤 + 멘토 리스트 영역 */}
      <div ref={scrollContainerRef} className="flex-grow overflow-y-auto mt-[233px] pb-[60px]">
        <div className="w-full max-w-2xl px-[16px] pt-[4px] space-y-4">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor, index) => (
              <div key={index} className="bg-white p-4 border-b relative">
                <img 
                  src={bookmarked[mentor.mName] ? bookmarkSaved : bookmark} 
                  alt="저장 아이콘" 
                  className="w-6 h-6 absolute top-2 right-2 cursor-pointer" 
                  onClick={() => toggleBookmark(mentor.mName)}
                />
                <div className="flex items-center space-x-4">
                  <img src={profileImage} alt="프로필" className="w-[78px] h-[78px] rounded-full object-cover" />
                  <div>
                    <div className="text-[16px] font-bold">{mentor.mName}</div>
                    <div className="mt-[4px] text-gray-5 text-[12px]">{mentor.mJob}</div>
                    <div className="text-gray-5 text-[12px]">{mentor.mYear}</div>
                    <div className="flex items-center space-x-1 text-yellow-500 border border-gray-8 pr-2 py-0.5 rounded-[5px] mt-[4px]">
                      <img src={star} alt="별 아이콘" className="w-6 h-6 ml-1" />
                      <span className="text-gray-5 text-[12px]">{mentor.mStar.toFixed(1)}</span>
                      <span className="text-gray-5 text-[12px]">({mentor.review})</span>
                      <span className="text-gray-5 text-[12px] !ml-[9px] !mr-[5px]">·</span>
                      <span className="text-gray-5 text-[12px]">응답률 {mentor.respond}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-[12px] mt-[15px]">{mentor.intro}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">검색 결과가 없습니다.</div>
          )}
        </div>
      </div>

      {/* 필터 모달 */}
      {filterType && (
        <MentorshipListFilter
          filterType={filterType}
          onClose={() => setFilterType(null)}
          selectedField={selectedField}
          onFieldSelect={setSelectedField}
          selectedSubField={selectedSubField}
          onSubFieldSelect={setSelectedSubField}
          selectedYear={selectedYear}
          onYearSelect={setSelectedYear}
        />
      )}

      {/* 고정 푸터 영역 */}
      <div
        className="w-full max-w-[600px] mx-auto h-[50px] fixed bottom-0 bg-background p-4 pt-[7px] transition-transform duration-[1500ms] ease-in-out"
        style={{
          boxShadow: '0px -4px 4px rgba(210, 205, 205, 0.25)',
          transform: isFooterVisible ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <div className="flex justify-around">
          {[
            { menu: '홈', img: homeIcon, link: '/' },
            { menu: '링어스', img: ringusIcon },
            { menu: '멘토링', img: mentoringIcon, link: '/mentorship' },
            { menu: '신청현황', img: currentIcon },
            { menu: '고객센터', img: serviceIcon },
          ].map(({ menu, img, link }) =>
            link ? (
              <Link key={menu} to={link} className="text-center">
                <img src={img} alt={menu} className="w-[21px] h-[21px] mx-auto" />
                <div className="text-[10px]">{menu}</div>
              </Link>
            ) : (
              <div key={menu} className="text-center">
                <img src={img} alt={menu} className="w-[21px] h-[21px] mx-auto" />
                <div className="text-[10px]">{menu}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorshipList;