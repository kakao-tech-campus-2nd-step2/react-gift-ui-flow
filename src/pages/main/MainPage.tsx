import styled from '@emotion/styled';

import AIBox from '@/pages/main/components/AIBox';
import GiftList from '@/pages/main/components/GiftList';
import MainBar from '@/pages/main/components/MainBar';
import { Layout } from '@/styles/Layout';

const MainLayout = styled(Layout)`
  width: 100%;
`;

const MainPage = () => {
  return (
    <MainLayout>
      <MainBar />
      <GiftList />
      <AIBox />
    </MainLayout>
  );
};

export default MainPage;
