import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <HeaderContainer>
      <Inner>
        <LogoLink to="/">
          <Logo src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="카카오 선물하기 로고" />
        </LogoLink>
        {user ? (
          <AccountLink to="/my-account">내 계정</AccountLink>
        ) : (
          <LoginLink to="/login">로그인</LoginLink>
        )}
      </Inner>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 54px;
`;

const LoginLink = styled(Link)`
  margin-right: 50px;
  color: #333;
  text-decoration: none;
`;

const AccountLink = styled(Link)`
  margin-right: 50px;
  color: #333;
  text-decoration: none;
`;

export default Header;
