import React from 'react';
import { HeaderContainer, Logo, Login } from './Header.styles';
import Container from '../Layout/Container';

const Header = () => (
  <HeaderContainer>
    <Container
      width="100%"
      maxWidth="1200px"
      justifyContent="space-between"
      alignItems="center"
      padding="10px 0"
    >
      <Logo href="/">
        <img
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
          alt="카카오 선물하기"
        />
      </Logo>
      <Login href="/login">로그인</Login>
    </Container>
  </HeaderContainer>
);

export default Header;
