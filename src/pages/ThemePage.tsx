import React from 'react';

import ThemeHeader from '../components/common/Header/ThemeHeader';

const ThemePage: React.FC = () => {
  const title = '가벼운 선물';
  const subtitle = ['예산은 가볍게, 감동은 무겁게 ❤️', '당신의 센스를 뽐내줄 부담 없는 선물'];

  return (
    <div>
      <ThemeHeader title={title} subtitle={subtitle} />
    </div>
  );
};

export default ThemePage;
