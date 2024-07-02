import React from 'react';
import { Container, Inner, Logo, Login } from '@components/Header/Header.styles';

const Header = () => (
  <Container>
    <Inner>
      <Logo href="/">선물하기</Logo>
      <Login href="/login">로그인</Login>
    </Inner>
  </Container>
);

export default Header;
