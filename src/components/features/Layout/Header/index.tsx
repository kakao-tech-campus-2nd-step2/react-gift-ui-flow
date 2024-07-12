import React from 'react';
import styled from '@emotion/styled';
import logo from '@assets/images/logo.png';
import { CenteredContainer, Container } from '@components/common';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@routes/path';
import AuthLinks from './AuthLinks';

const LOGO_ALT = 'home page logo';

export default function Header() {
  return (
    <HeaderContainer>
      <CenteredContainer maxWidth="md">
        <Container justifyContent="space-between" alignItems="center">
          <Link to={ROUTE_PATH.HOME}>
            <Logo src={logo} alt={LOGO_ALT} />
          </Link>
          <AuthLinks />
        </Container>
      </CenteredContainer>
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
