import styled from '@emotion/styled';
import React from 'react';

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <HeaderWrapper {...props}>
      <HeaderContent>
        <a href="#">
          <img
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
            alt="카카오 선물하기 로고"
          />
        </a>
        <LoginDiv>로그인</LoginDiv>
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

const LoginDiv = styled.div`
  align-items: center;
  font-size: 14px;
  color: rgb(0, 0, 0);
  cursor: pointer;
`;
