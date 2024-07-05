import React from 'react';

import ThemeCategories from '@/pages/MainPage/ThemeCategories';
import TrendingGifts from '@/pages/MainPage/TrendingGifts';

const MainPage: React.FC = () => {
  return (
    <div>
      <main>
        <ThemeCategories />
        <TrendingGifts />
      </main>
    </div>
  );
};

export default MainPage;
