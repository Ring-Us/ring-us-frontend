/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2.5rem;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  color: #1f2937;
  letter-spacing: -0.05em;
  margin-bottom: 0.3rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.6;
`;

const Button = styled.button`
  display: inline-block;
  background-color: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 0.2rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.875rem;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4f46e5;
  }
`;

export const Last = () => {
  return (
    <Section>
      <Container>
        <Title>만남이 이어짐으로</Title>
        <Description>
          링어스를 통해 만나는 <br /> 우리 학교 선배와의 유익한 대화의 기회
          <br /> 지금 바로 시작해보세요
        </Description>
      </Container>
      <Button>시작하기</Button>
    </Section>
  );
};
