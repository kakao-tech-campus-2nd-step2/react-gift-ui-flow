// import styled from '@emotion/styled';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Routes } from './Routes';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '54px' }}>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
