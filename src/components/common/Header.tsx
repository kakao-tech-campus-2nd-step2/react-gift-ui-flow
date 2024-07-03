import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 20px;
`;

const StyledTitle = styled.title`
  font-size: 24px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: #333;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const isLogin = false;
  return (
    <StyledHeader>
      <StyledTitle>
        <p>선물하기</p>
      </StyledTitle>
      {isLogin ? (
        <StyledLink to="/my-page">내 계정</StyledLink>
      ) : (
        <StyledLink to="/login">로그인</StyledLink>
      )}
    </StyledHeader>
  );
};

export default Header;
