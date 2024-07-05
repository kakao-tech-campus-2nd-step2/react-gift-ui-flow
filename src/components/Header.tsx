import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@/components/common/layouts/Container';

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 54px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Container>
      <HeaderInner>
        <Link to="/">
          <Logo>
            <img
              src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
              alt="선물하기"
            />
          </Logo>
        </Link>
        {isLoggedIn ? (
          <Link to="/my-account">
            <LoginContainer>
              <p>내 계정</p>
            </LoginContainer>
          </Link>
        ) : (
          <Link to="/login">
            <LoginContainer>
              <p>로그인</p>
            </LoginContainer>
          </Link>
        )}
      </HeaderInner>
    </Container>
  );
};

export default Header;
