import React from 'react';
import { useParams } from 'react-router-dom';

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <div>
      <h2>Theme Page</h2>
      <p>This is the theme page for: {themeKey}</p>
    </div>
  );
};

export default ThemePage;
