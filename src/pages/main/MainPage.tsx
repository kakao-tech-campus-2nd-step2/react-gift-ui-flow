import styled from '@emotion/styled';

import MainBar from '@/pages/main/components/MainBar';
import { Layout } from '@/styles/Layout';

import GiftList from './components/GiftList';

const MainLayout = styled(Layout)`
  width: 100%;
`;

const MainPage = () => {
  return (
    <MainLayout>
      <MainBar />
      <GiftList />
    </MainLayout>
  );
};

export default MainPage;
