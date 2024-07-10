import styled from "@emotion/styled";
import { Container } from "../../Container";
import { Link } from "react-router-dom";
import ROUTE_PATH from "@/constants/path";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const Header = () => {
  const isLoggedIn = useContext(AuthContext).username;

  return (
    <Container>
      <StyledHeader>
        <Link to={ROUTE_PATH.ROOT}>
          <h1>선물하기</h1>
        </Link>
        {isLoggedIn ? (
          <Link to={ROUTE_PATH.MY_ACCOUNT}>내 계정</Link>
        ) : (
          <Link to={ROUTE_PATH.LOGIN}>로그인</Link>
        )}
      </StyledHeader>
    </Container>
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
