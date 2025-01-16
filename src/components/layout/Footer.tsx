import Logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="hidden md:block bg-gray-50 text-gray-700 py-10 border-t border-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* 로고 */}
        <div className="flex justify-center md:justify-start">
          <img src={Logo} alt="Saas Logo" className="w-16 h-16" />
        </div>

        {/* 링어스 섹션 */}
        <div>
          <h3 className="font-bold mb-2">링어스</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                서비스 소개
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                이용 가이드
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                이용 가격
              </a>
            </li>
          </ul>
        </div>

        {/* 서비스 섹션 */}
        <div>
          <h3 className="font-bold mb-2">서비스</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                공지사항
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                자주 묻는 질문
              </a>
            </li>
          </ul>
        </div>

        {/* 고객센터 섹션 */}
        <div>
          <h3 className="font-bold mb-2">고객센터</h3>
          <ul className="space-y-1">
            <li>전화: 0000-0000</li>
            <li>이메일: ringus@xxxx.xxx</li>
            <li>
              <a href="#" className="hover:underline">
                1:1 문의
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 회사 정보 */}
      <div className="mt-10 text-center text-xs text-gray-500">
        <p>
          <strong>(주) 링어스</strong>
        </p>
        <p>
          사업자등록번호: 000-00-00000 | 대표: OOO | 통신판매업신고증:
          제0000-XXX-00000호
        </p>
      </div>
    </footer>
  );
};
