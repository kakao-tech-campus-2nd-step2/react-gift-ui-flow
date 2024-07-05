import React from 'react';
import { useParams } from 'react-router-dom';

import ThemeHeader from '../components/common/Header/ThemeHeader';

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <div>
      <ThemeHeader />
      <p>This is the theme page for: {themeKey}</p>
    </div>
  );
};

export default ThemePage;
