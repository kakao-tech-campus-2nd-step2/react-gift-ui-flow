import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';
import Home from '@pages/Home';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <Home />
    </>
  );
}

export default App;
