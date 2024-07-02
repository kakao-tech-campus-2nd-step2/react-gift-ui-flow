import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';
import Header from '@components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <main>
      <Global styles={resetStyles} />
      <Header />
      <Footer />
    </main>
  );
}

export default App;
