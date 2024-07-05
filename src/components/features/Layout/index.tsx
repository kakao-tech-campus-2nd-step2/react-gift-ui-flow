import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/features/Header';
import { Footer } from '@/components/features/Footer';

export const Layout = () => (
  <StyledLayout>
    <Header />
    <FooterContainer>
      <Outlet />
      <Footer />
    </FooterContainer>
  </StyledLayout>
);

const StyledLayout = styled.div`
  width: 100%;
  position: relative;
`;

const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 54px;
`;
