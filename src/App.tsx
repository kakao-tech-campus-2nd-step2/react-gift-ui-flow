import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Inner from '@components/common/Layout/Inner';

function App() {
  return (
    <main>
      <Global styles={resetStyles} />
      <Inner maxWidth={1024}>
        <Header />
        <Footer />
      </Inner>
    </main>
  );
}

export default App;
