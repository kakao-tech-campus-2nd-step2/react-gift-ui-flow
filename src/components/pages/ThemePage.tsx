import React from 'react';
import { useParams } from 'react-router-dom';

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <div>
      <h1>Theme Page: {themeKey}</h1>
    </div>
  );
};

export default ThemePage;