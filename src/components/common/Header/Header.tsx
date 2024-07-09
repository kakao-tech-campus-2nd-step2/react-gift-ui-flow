import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
}

const HeaderWrapper = styled.header<{ bgColor?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${({ bgColor }) => bgColor || '#ffffff'};
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoText = styled.div`
  font-size: 26px;
  font-weight: bold;
  font-family: 'Arial, sans-serif';
`;

const LoginButton = styled(Link)`
  padding: 8px 16px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Arial, sans-serif';
  text-decoration: none;
`;

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoText>선물하기</LogoText>
        {isLoggedIn ? (
          <LoginButton to="/my-account">내 계정</LoginButton>
        ) : (
          <LoginButton to="/login">로그인</LoginButton>
        )}
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
