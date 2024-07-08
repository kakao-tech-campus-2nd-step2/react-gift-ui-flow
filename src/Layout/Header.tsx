import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/LoginContext';

const Header = () => {
  const { isLoggedIn, setRedirectPath } = useLogin();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setRedirectPath(window.location.pathname);
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo>선물하기</Logo>
      {isLoggedIn ? (
        <StyledLink to="/my-account">내 계정</StyledLink>
      ) : (
        <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  font: inherit;

  &:hover {
    color: darkblue;
  }
`;

export default Header;