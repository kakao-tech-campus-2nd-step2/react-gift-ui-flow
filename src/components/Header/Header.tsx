import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '@components/Layout/Container';
import { AuthContext } from '../../App';
import { HeaderContainer, Logo, Login } from './Header.styles';

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <Container
        width="100%"
        maxWidth="1024px"
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
        {isLoggedIn ? (
          <Link to="/my-account">내 계정</Link>
        ) : (
          <Login href="/login">로그인</Login>
        )}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
