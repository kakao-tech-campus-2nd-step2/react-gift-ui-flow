import React from 'react';
import { useParams } from 'react-router-dom';

const ThemePage = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <div>
      {themeKey} Page!!!
    </div>
  );
};

export default ThemePage;
