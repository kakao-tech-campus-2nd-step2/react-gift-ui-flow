import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HomeLogo
        src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
        alt="Home Logo"
      ></HomeLogo>
      <LoginBtn>로그인</LoginBtn>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeLogo = styled.img`
  width: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled.span`
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;
