import React from 'react';
import styled from '@emotion/styled';
import Container from '@components/common/Layout/Container/Container';
import logo from '@assets/images/logo.png';

export default function Header() {
  return (
    <header>
      <Container maxWidth="1024" justifyContent="space-between" alignItems="center">
        <Logo src={logo} alt="home page logo" />
        <Login>로그인</Login>
      </Container>
    </header>
  );
}

const Logo = styled.img`
  width: 60px;
`;

const Login = styled.p`
  font-size: 14px;
`;
