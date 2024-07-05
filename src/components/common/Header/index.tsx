import React from 'react';
import styled from '@emotion/styled';
import Container from '@components/common/Layout/Container';
import logo from '@assets/images/logo.png';
import { Inner } from '@components/common';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@routes/constants';
import { BREAK_POINTS } from '@assets/styles/variants';
import AuthLinks from './AuthLinks';

const LOGO_ALT = 'home page logo';

export default function Header() {
  return (
    <HeaderContainer>
      <Inner maxWidth={BREAK_POINTS.md}>
        <Container justifyContent="space-between" alignItems="center">
          <Link to={ROUTE_PATH.HOME}>
            <Logo src={logo} alt={LOGO_ALT} />
          </Link>
          <AuthLinks />
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
