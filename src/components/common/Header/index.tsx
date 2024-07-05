import React from 'react';
import styled from '@emotion/styled';
import Container from '@components/common/Layout/Container';
import logo from '@assets/images/logo.png';
import Inner from '@components/common/Layout/Inner';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/constants';

export default function Header() {
  return (
    <HeaderContainer>
      <Inner maxWidth={1024}>
        <Container justifyContent="space-between" alignItems="center">
          <Link to={ROUTE_PATH.HOME}>
            <Logo src={logo} alt="home page logo" />
          </Link>
          <Link to={ROUTE_PATH.LOGIN}>
            <Login>로그인</Login>
          </Link>
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
  z-index: 9;
`;

const Logo = styled.img`
  width: 60px;
`;

const Login = styled.p`
  font-size: 14px;
`;
