import styled from '@emotion/styled';

export const Header: React.FC = () => {
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
          <LoginContainer>
            <LoginText>로그인</LoginText>
          </LoginContainer>
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
  background-color: rgb(255, 255, 255);
  padding: 0px 16px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 54px;
`;

const LoginContainer = styled.div``;

const LoginText = styled.p`
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
`;
