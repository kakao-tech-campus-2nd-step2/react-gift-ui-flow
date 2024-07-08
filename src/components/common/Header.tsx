import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useAuth } from '@/App-core/AuthContext';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo src="/images/gift_logo.png" alt="선물하기" />
      </LogoLink>
      {isLoggedIn ? (
        <NavItem to="/my-account">내 계정</NavItem>
      ) : (
        <NavItem to="/login">로그인</NavItem>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 400px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
`;

const Logo = styled.img`
  height: 60px;
`;

const NavItem = styled(Link)`
  font-size: 16px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;
