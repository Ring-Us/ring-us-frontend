/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactSVG } from "react-svg";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.svg";

// 스타일 정의
const headerStyles = css`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.5rem;
`;

const StyledImage = styled.img`
  width: 65px;
  height: 65px;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    a {
      color: rgba(0, 0, 0, 0.7);
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: black;
      }
    }

    .login {
      color: #6366f1; /* Indigo-500 */
      font-weight: 500;
    }

    .signup {
      background-color: #6366f1;
      color: white;
      padding: 0.7rem 1rem;
      border-radius: 10px;
      font-weight: 500;
      border: none;

      &:hover {
        background-color: #4f46e5; /* Indigo-600 */
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Header = () => {
  return (
    <header css={headerStyles}>
      <Container>
        <HeaderInner>
          {/* 로고 */}
          <StyledImage src={Logo} alt="Saas Logo" />

          {/* 메뉴 아이콘 (모바일용) */}
          <Wrapper>
            <ReactSVG src={MenuIcon} />
          </Wrapper>

          {/* 내비게이션 메뉴 (데스크탑용) */}
          <Nav>
            <a href="#">링어스</a>
            <a href="#">멘토링</a>
            <a href="#">신청현황</a>
            <a href="#">고객센터</a>
            <a href="/login" className="login">
              로그인
            </a>
            <button className="signup">회원가입</button>
          </Nav>
        </HeaderInner>
      </Container>
    </header>
  );
};
