import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <Outlet />
    </>
  );
}

export default App;
