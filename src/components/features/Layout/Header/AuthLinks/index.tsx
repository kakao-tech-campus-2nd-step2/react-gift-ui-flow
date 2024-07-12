import React from 'react';
import styled from '@emotion/styled';
import { useAuth } from '@context/auth/useAuth';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@routes/path';

const AUTH_LINKS = {
  authenticated: { path: ROUTE_PATH.MY_ACCOUNT, label: '내 계정' },
  unauthenticated: { path: ROUTE_PATH.LOGIN, label: '로그인' },
};

export default function AuthLinks() {
  const { isAuthenticated } = useAuth();

  const linkConfig = isAuthenticated ? AUTH_LINKS.authenticated : AUTH_LINKS.unauthenticated;

  return (
    <Link to={linkConfig.path}>
      <AuthLink>{linkConfig.label}</AuthLink>
    </Link>
  );
}

const AuthLink = styled.p`
  font-size: 14px;
`;
