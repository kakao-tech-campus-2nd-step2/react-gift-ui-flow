import React from 'react';
import styled from '@emotion/styled';
import Container from '@components/common/Layout/Container/Container';
import logo from '@assets/images/logo.png';
import Inner from '@components/common/Layout/Inner';

export default function Header() {
  return (
    <HeaderContainer>
      <Inner maxWidth={1024}>
        <Container justifyContent="space-between" alignItems="center">
          <Logo src={logo} alt="home page logo" />
          <Login>로그인</Login>
        </Container>
      </Inner>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  background-color: #fff;
  width: 100%;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  width: 60px;
`;

const Login = styled.p`
  font-size: 14px;
`;
