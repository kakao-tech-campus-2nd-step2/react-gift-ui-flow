import React from 'react';
import styled from '@emotion/styled';
import Container from '@components/common/Layout/Container/Container';
import logo from '@assets/images/logo.png';
import Inner from '@components/common/Layout/Inner';

export default function Header() {
  return (
    <header>
      <Inner maxWidth={1024}>
        <Container justifyContent="space-between" alignItems="center">
          <Logo src={logo} alt="home page logo" />
          <Login>로그인</Login>
        </Container>
      </Inner>
    </header>
  );
}

const Logo = styled.img`
  width: 60px;
`;

const Login = styled.p`
  font-size: 14px;
`;
