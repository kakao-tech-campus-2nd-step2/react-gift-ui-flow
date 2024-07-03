import styled from "@emotion/styled";
import { Button } from "../common/Button";

const Header = () => {
  return (
    <StyledHeader>
      <h1>선물하기</h1>
      <div>
        <Button theme="transparent">로그인</Button>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  & h1 {
    font-weight: 800;
    font-size: 1.2rem;
  }
`;

export default Header;
