import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0px 16px;
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

const Header: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Header;
