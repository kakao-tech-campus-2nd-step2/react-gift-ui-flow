import styled from "@emotion/styled";
import React from "react";

import { breakpoints } from "@/styles/variants";

const Header = () => {
  const savedToken = sessionStorage.getItem("autoToken");

  const loginClick: React.MouseEventHandler<HTMLDivElement> = () => {
    location.href = "/login";
  };
  const myaccountClick: React.MouseEventHandler<HTMLDivElement> = () => {
    location.href = "/my-account";
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <StyledA href="/">
          <LogoImage src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" />
        </StyledA>
        {savedToken ? (
          <MenuContainer onClick={myaccountClick}>
            <p>내 계정</p>
          </MenuContainer>
        ) : (
          <MenuContainer onClick={loginClick}>
            <p>로그인</p>
          </MenuContainer>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const InnerWrapper = styled.div`
  width: 1024px;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const LogoImage = styled.img`
  height: 54px;
`;

const StyledA = styled.a`
  border: 0;
  outline: 0;
`;

const MenuContainer = styled.div`
  cursor: pointer;
`;
