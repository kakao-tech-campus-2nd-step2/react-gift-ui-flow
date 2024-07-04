import styled from '@emotion/styled'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <HeaderNavigator className="inner">
          <a href="/">
            <HeaderLogo src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="카카오 선물하기 로고" />
          </a>
          <LoginText>로그인</LoginText>
        </HeaderNavigator>
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  position: fixed;
  box-sizing: border-box;
  z-index: 9999;
  width: 100%;
  max-width: 100vw;
  height: 54px;
  background-color: rgb(255, 255, 255);
  padding: 0px 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavigator = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.img`
  height: 54px;
`;

const LoginText = styled.p`
  align-items: center;
  font-size: 14px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
`;