import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '@/context/AuthContext';

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const { authToken } = useContext(AuthContext);

  return (
    <HeaderWrapper {...props}>
      <HeaderContent>
        <Link to="/">
          <img
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
            alt="카카오 선물하기 로고"
          />
        </Link>
        {authToken ? (
          <MyAccountLink to="/my-account">내 계정</MyAccountLink>
        ) : (
          <LoginLink to="/login">로그인</LoginLink>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 9999;
  width: 100%;
  max-width: 100vw;
  height: 54px;
  background-color: rgb(255, 255, 255);
  padding: 0px 16px;
`;

const HeaderContent = styled.footer`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  img {
    height: 54px;
  }
`;

const LoginLink = styled(Link)`
  align-items: center;
  font-size: 14px;
  color: rgb(0, 0, 0);
  cursor: pointer;
`;

const MyAccountLink = styled(Link)`
  align-items: center;
  font-size: 14px;
  color: rgb(0, 0, 0);
  cursor: pointer;
`;
