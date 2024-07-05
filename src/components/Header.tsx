import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 54px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 54px;
  padding: 0px 16px;
  position: absolute;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 16px;

  img {
    height: 54px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 16px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <img
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
            alt="선물하기"
          />
        </Logo>
        <LoginContainer>
          <p>로그인</p>
        </LoginContainer>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
