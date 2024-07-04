import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';
// import Home from '@pages/Home';
import Theme from '@pages/Theme';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <Theme />
    </>
  );
}

export default App;
