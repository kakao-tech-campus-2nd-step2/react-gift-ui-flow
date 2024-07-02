import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 54px;
  max-width: 100vw;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
`;

const StyledInner = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.img`
  height: 54px;
`;

const StyledLinkText = styled(Link)`
  align-items: center;
  font-size: 14px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
  outline: none;
`;

const Header = () => {
  const isLogin = false;
  return (
    <StyledHeader>
      <StyledInner>
        <StyledLink to="/">
          <StyledLogo
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
            alt="카카오 선물하기 로고"
          />
        </StyledLink>
        {isLogin ? (
          <StyledLinkText to="/my-account">내 계정</StyledLinkText>
        ) : (
          <StyledLinkText to="/login">로그인</StyledLinkText>
        )}
      </StyledInner>
    </StyledHeader>
  );
};

export default Header;
