import React from 'react';
import { Container, Inner, Logo, Login } from './Header.styles';

const Header = () => (
  <Container>
    <Inner>
      <Logo href="/">
        <img
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
          alt="카카오 선물하기"
        />
      </Logo>
      <Login href="/login">로그인</Login>
    </Inner>
  </Container>
);

export default Header;
