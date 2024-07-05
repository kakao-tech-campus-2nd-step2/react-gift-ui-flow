import styled from '@emotion/styled';

const Header = () => {
    return (
      <HeaderContainer>
        <Logo>선물하기</Logo>
        <Login>로그인</Login>
      </HeaderContainer>
    );
  };

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Login = styled.div`
  font-size: 14px;
`;

export default Header;