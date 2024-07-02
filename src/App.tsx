import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';
import Header from '@components/common/Header';

function App() {
  return (
    <main>
      <Global styles={resetStyles} />
      <Header />
    </main>
  );
}

export default App;
