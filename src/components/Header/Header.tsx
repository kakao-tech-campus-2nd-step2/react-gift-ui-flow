import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  outline: none;
`;

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({isLoggedIn}) => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem>
          <StyledLink to="/">선물하기</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to={isLoggedIn ? '/my-account' : '/login'}>
            {isLoggedIn ? '내 계정' : '로그인'}
          </StyledLink>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
