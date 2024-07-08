import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/auth/AuthContext';

export const Header = () => {
  const navigate = useNavigate();
  const { authToken, logout } = useAuth();

  const handleLoginClick = () => {
    if (authToken) {
      logout();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <NavContainer className="inner">
          <a href="/">
            <Logo
              src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
              alt="카카오 선물하기 로고"
            ></Logo>
          </a>
          {authToken ? (
            <Button onClick={() => navigate('/my-account')}>내 계정</Button>
          ) : (
            <Button onClick={handleLoginClick}>로그인</Button>
          )}
        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100%;
  max-width: 100vw;
  height: 54px;
  background-color: #fff;
  padding: 0px 16px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 54px;
`;

const Button = styled.p`
  align-items: center;
  font-size: 14px;
  color: #000;
  text-decoration: none;
`;
