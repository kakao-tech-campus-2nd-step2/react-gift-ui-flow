// import React from 'react';
import { useParams } from 'react-router-dom';

const Theme = () => {
  const { themeKey } = useParams();
  return <h1>Theme Page for {themeKey}</h1>;
};

export default Theme;
