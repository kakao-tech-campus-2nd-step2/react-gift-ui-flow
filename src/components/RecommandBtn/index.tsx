import styled from "@emotion/styled";
import { Button } from "../common/Button";
import { Container } from "../common/layouts/Container";

const RecommandBtn = () => {
  return (
    <Container>
      <StyledRecommandButtonSection>
        <Button
          theme="kakao"
          style={{
            padding: "2.5rem",
            flexDirection: "column",
            gap: "0.5rem",
            borderRadius: "10px",
          }}
        >
          <span>AI가 추천하는 선물</span>
          <p>선물을 추천받고 싶은 친구를 선택해주세요</p>
        </Button>
      </StyledRecommandButtonSection>
    </Container>
  );
};
const StyledRecommandButtonSection = styled.section`
  span {
    opacity: 0.8;
    font-size: 14px;
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export default RecommandBtn;
