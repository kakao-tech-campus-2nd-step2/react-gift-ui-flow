import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10px;
  width: 100%;
  padding: 20px;
  position: fixed;
  z-index: 10;
  top: 0;
`;

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  font-color: #000000;
`;

const StyledLink = styled(Link)`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin-right: 50px;

  &:hover {
    cursor: pointer;
  }
  & > p {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 20px;
    font-color: #000000;
  }
`;

const Header = () => {
  const isLogin = false;
  return (
    <StyledHeader>
      <StyledTitle>
        <StyledLink to="/">
          <p>선물하기</p>
        </StyledLink>
      </StyledTitle>
      {isLogin ? (
        <StyledLink to="/mypage">내 계정</StyledLink>
      ) : (
        <StyledLink to="/login">로그인</StyledLink>
      )}
    </StyledHeader>
  );
};

export default Header;
