import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import { Container } from '@/components/common/layouts/Container';
import MainFooter from '@/components/ui/footer/MainFooter';
import MainNavigation from '@/components/ui/header/MainNavigation';

const MainContent = styled(Container)`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <MainContent maxWidth="100vw">
        <Outlet />
      </MainContent>
      <MainFooter />
    </>
  );
};

export default RootPage;
