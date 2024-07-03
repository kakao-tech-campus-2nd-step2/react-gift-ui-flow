import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HomeLogo>선물하기</HomeLogo>
      <LoginBtn>로그인</LoginBtn>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const HomeLogo = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const LoginBtn = styled.span`
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;
