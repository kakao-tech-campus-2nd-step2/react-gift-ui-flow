import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
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
