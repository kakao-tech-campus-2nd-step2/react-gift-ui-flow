import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import MainFooter from '@/components/ui/footer/MainFooter';
import MainNavigation from '@/components/ui/header/MainNavigation';

const MainContent = styled.main`
  width: 100vw;
  height: auto;
  overflow: hidden;
`;

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <MainContent>
        <Outlet />
      </MainContent>
      <MainFooter />
    </>
  );
};

export default RootPage;
