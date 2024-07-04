import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <Title>선물하기</Title>
      {isLoggedIn ? (
        <LoginButton onClick={handleLogoutClick}>로그아웃</LoginButton>
      ) : (
        <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
