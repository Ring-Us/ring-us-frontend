/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Logo from "../../assets/logo.png";

const FooterContainer = styled.footer`
  background-color: #f9fafb;
  color: #374151;
  padding: 2.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.25rem;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CompanyInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.75rem;
  color: #6b7280;
`;

const StyledImage = styled.img`
  width: 65px;
  height: 65px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LogoWrapper>
          <StyledImage src={Logo} alt="Saas Logo" height={50} width={50} />
        </LogoWrapper>

        <Section>
          <SectionTitle>링어스</SectionTitle>
          <List>
            <ListItem>
              <a href="#">서비스 소개</a>
            </ListItem>
            <ListItem>
              <a href="#">이용 가이드</a>
            </ListItem>
            <ListItem>
              <a href="#">이용 가격</a>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>서비스</SectionTitle>
          <List>
            <ListItem>
              <a href="#">공지사항</a>
            </ListItem>
            <ListItem>
              <a href="#">자주 묻는 질문</a>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>고객센터</SectionTitle>
          <List>
            <ListItem>전화: 0000-0000</ListItem>
            <ListItem>이메일: ringus@xxxx.xxx</ListItem>
            <ListItem>
              <a href="#">1:1 문의</a>
            </ListItem>
          </List>
        </Section>
      </ContentWrapper>

      <CompanyInfo>
        <p>
          <strong>(주) 링어스</strong>
        </p>
        <p>
          사업자등록번호: 000-00-00000 | 대표: OOO | 통신판매업신고증:
          제0000-XXX-00000호
        </p>
      </CompanyInfo>
    </FooterContainer>
  );
};
