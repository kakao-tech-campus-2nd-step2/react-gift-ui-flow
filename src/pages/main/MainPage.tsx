import styled from '@emotion/styled';

import MainBar from '@/pages/main/components/MainBar';
import { Layout } from '@/styles/Layout';

const MainLayout = styled(Layout)`
  width: 100%;
`;

const MainPage = () => {
  return (
    <MainLayout>
      <MainBar />
    </MainLayout>
  );
};

export default MainPage;
