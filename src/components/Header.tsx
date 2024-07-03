import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <LogoLink to="/">선물하기</LogoLink>
        <NavLink to="/login">로그인</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 16px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  width: 100%;
  max-width: 1024px;
  height: 59px;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  width: 100%;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

export default Header;
