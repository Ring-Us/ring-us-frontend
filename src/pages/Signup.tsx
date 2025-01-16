import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useState, useEffect } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  //   const onClickConfirmButton = () => {
  //     if (email === User.email && pw === User.pw) {
  //       alert("로그인에 성공했습니다.");
  //     } else {
  //       alert("등록되지 않은 회원입니다.");
  //     }
  //   };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <Header />

      <header className="md:hidden relative flex items-center px-4 py-3">
        {/* 🔹 뒤로 가기 버튼 */}
        <button
          onClick={() => navigate("/login")}
          className="text-gray-700 text-lg px-3 py-1"
        >
          &larr;
        </button>

        <h4 className="absolute left-1/2 transform -translate-x-1/2 text-gray-700 text-lg font-medium">
          회원가입
        </h4>
      </header>

      {/* 회원가입 페이지 */}
      <div className="h-[calc(100%-40px)] flex flex-col flex-grow items-center justify-center px-6 bg-white md:py-24">
        {/* 제목 */}
        <h1 className="md:block hidden text-2xl font-bold text-gray-900">
          회원가입
        </h1>

        {/* 회원가입 폼 */}
        <div className="w-full max-w-md bg-white rounded-lg p-6">
          {/* 아이디 입력 */}
          <div className="mb-4">
            <label className="block text-left text-gray-700 text-sm font-medium mb-1">
              아이디
            </label>
            <div className="flex items-center border-b border-gray-300 focus-within:border-gray-600">
              <input
                type="email"
                placeholder="이메일 주소를 입력해주세요."
                className="w-full p-2 outline-none focus:ring-0 placeholder-gray-300"
                value={email}
                onChange={handleEmail}
              />
              <button className="border ml-2 text-black px-3 py-1.5 rounded-md text-xs whitespace-nowrap">
                인증
              </button>
            </div>
            {!emailValid && email.length > 0 && (
              <div className="p-2 text-red-500 text-xs">
                올바른 이메일을 입력해주세요.
              </div>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div className="mb-4">
            <label className="block text-left text-gray-700 text-sm font-medium mb-1">
              비밀번호
            </label>
            <div className="flex items-center border-b border-gray-300 focus-within:border-gray-600">
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요.(영문, 숫자, 특수문자 조합 8~20자)"
                className="w-full p-2 outline-none focus:ring-0 placeholder-gray-300 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
                value={pw}
                onChange={handlePw}
              />
            </div>
            {!pwValid && pw.length > 0 && (
              <div className="p-2 text-red-500 text-xs">
                영문, 숫자, 특수문자 조합 8~20자로 입력해주세요.
              </div>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className="mb-4">
            <label className="block text-left text-gray-700 text-sm font-medium mb-1">
              비밀번호
            </label>
            <div className="flex items-center border-b border-gray-300 focus-within:border-gray-600">
              <input
                type="password"
                placeholder="비밀번호를 다시 입력해주세요."
                className="w-full p-2 outline-none focus:ring-0 placeholder-gray-300"
              />
            </div>
          </div>

          {/* 약관 동의 */}
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">
                링어스 이용약관 (필수)
              </span>
              <Link
                to="#"
                className="ml-auto text-sm text-indigo-600 hover:underline"
              >
                상세보기
              </Link>
            </div>

            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={() => setAgreePrivacy(!agreePrivacy)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">
                개인정보 수집 및 이용 동의 (필수)
              </span>
              <Link
                to="#"
                className="ml-auto text-sm text-indigo-600 hover:underline"
              >
                상세보기
              </Link>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={agreeMarketing}
                onChange={() => setAgreeMarketing(!agreeMarketing)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">
                마케팅 정보 수신 (선택)
              </span>
            </div>
          </div>

          {/* 다음 버튼 (약관 동의 필수) */}
          <button
            // onClick={onClickConfirmButton}
            className={`w-full mt-6 p-3 rounded-md font-semibold ${
              agreeTerms && agreePrivacy && !notAllow
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!(agreeTerms && agreePrivacy && !notAllow)} // 조건 수정
          >
            다음으로
          </button>
        </div>
      </div>

      {/* 모바일 전용 네비게이션 바 (PC에서는 숨김)
      <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around py-3 border-t border-gray-200 md:hidden">
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          홈
        </Link>
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          링어스
        </Link>
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          멘토링
        </Link>
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          신청현황
        </Link>
        <Link to="#" className="text-gray-600 text-sm hover:text-indigo-600">
          고객센터
        </Link>
      </div> */}

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
