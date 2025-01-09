/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 1.5rem; /* 모바일에서는 패딩 줄이기 */
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  max-width: 80%; /* 모바일에서도 꽉 차게 */

  @media (min-width: 300px) {
    max-width: 768px;
  }
`;

const Card = styled.div`
  background: linear-gradient(to bottom, white, #a5b4fc);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2.5rem; /* 기존 5rem에서 줄이기 */
  text-align: center;
  margin-bottom: 4rem; /* 기존보다 줄여서 간격 확보 */
`;

const Title = styled.h1`
  font-size: 1.5rem; /* 모바일에서 가독성 유지 */
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  background-color: #6366f1;
  color: white;
  padding: 0.7rem 2rem; /* 기존 4rem에서 줄이기 */
  margin-bottom: 2rem;
  border-radius: 0.6rem;
  font-weight: 500;
  font-size: 1rem; /* 버튼 글씨 크기 키우기 */
  transition: background-color 0.3s;
  border: none;

  &:hover {
    background-color: #4f46e5;
  }
`;

const Subtitle = styled.h3`
  font-size: 1rem; /* 모바일에서 너무 크지 않게 설정 */
  font-weight: bold;
  color: #1f2937;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Hero = () => {
  return (
    <Section>
      <Container>
        <Card>
          <Title>
            나의 취업루트
            <br /> 링어스에서 알아보자
          </Title>
          <Button>시작하기</Button>
        </Card>
        <Subtitle>
          우리 학과&#183;학교 선배들의 취업 정보부터 멘토링까지
          <br />
          링어스에서 모두 확인하세요.
        </Subtitle>
      </Container>
    </Section>
  );
};
