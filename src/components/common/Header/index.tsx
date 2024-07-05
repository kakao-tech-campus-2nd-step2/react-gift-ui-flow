import React from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const HeaderContainer = styled.header`
  background-color: #FFFFFF;
  color: #000000;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  a {
    color: #000000;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Header: React.FC = () => {
  const { authToken } = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick}>선물하기</Logo>
      <Nav>
        {authToken ? (
          <Link to="/my-account">내 계정</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
