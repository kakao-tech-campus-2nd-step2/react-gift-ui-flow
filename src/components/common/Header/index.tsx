import styled from "@emotion/styled";
import React from "react";

import { breakpoints } from "@/styles/variants";

const Header = () => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    location.href = "/login";
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <a href="/">
          <LogoImage src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" />
        </a>
        <LoginContainer onClick={handleClick}>
          <p>로그인</p>
        </LoginContainer>
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

const LoginContainer = styled.div`
  cursor: pointer;
`;
