import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components/common';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
