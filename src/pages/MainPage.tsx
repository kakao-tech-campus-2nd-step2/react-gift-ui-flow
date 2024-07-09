import React from 'react';

import GiftRanking from '../components/common/GiftRanking/GiftRanking';
import ThemeSection from '../components/common/ThemeSection/ThemeSection';

const MainPage: React.FC = () => {
  return (
    <>
      <ThemeSection />
      <GiftRanking />
    </>
  );
};

export default MainPage;
