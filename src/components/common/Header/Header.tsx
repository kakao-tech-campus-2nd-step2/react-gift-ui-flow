import styled from '@emotion/styled';
import React from 'react';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
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

const LoginButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Arial, sans-serif';
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoText>선물하기</LogoText>
        <LoginButton>로그인</LoginButton>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
