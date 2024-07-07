import styled from '@emotion/styled';

import AIBox from '@/pages/main/components/AIBox';
import GiftList from '@/pages/main/components/GiftList';
import MainBar from '@/pages/main/components/MainBar';
import PopularGift from '@/pages/main/components/PopularGift';
import { Layout } from '@/styles/Layout';

const MainLayout = styled(Layout)`
  width: 100%;
`;

const Margin = styled.div`
  width: 100%;
  height: 120px;
`;

const MainPage = () => {
  return (
    <MainLayout>
      <MainBar />
      <GiftList />
      <AIBox />
      <Margin />
      <PopularGift />
    </MainLayout>
  );
};

export default MainPage;
