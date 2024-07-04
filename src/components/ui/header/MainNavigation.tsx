import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import GiftLogo from '@/assets/pc_gift_logo.png';
import { Image } from '@/components/common/Image';

const Layout = styled.header`
  height: 59px;
  padding: 0px 16px;
  max-width: calc(100vw - 32px);
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const LoginText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const LogoImg = styled(Image)`
  height: 50px;
  width: auto;
`;

const MainNavigation = () => {
  return (
    <Layout>
      <InnerContainer>
        <NavLink to="/">
          <LogoImg src={GiftLogo} alt="nav" radius={0} ratio="auto" />
        </NavLink>
        <NavLink to="/login">
          <LoginText>로그인</LoginText>
        </NavLink>
      </InnerContainer>
    </Layout>
  );
};

export default MainNavigation;
