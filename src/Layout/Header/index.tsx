import styled from '@emotion/styled';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>선물하기</Title>
      <LoginButton>로그인</LoginButton>
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
`;