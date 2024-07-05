import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import MainPage from '@/pages/Main';

import { Container } from './components/common/layouts/Container';

const App = () => {
  const isLoggedIn = false;

  return (
    <React.StrictMode>
    <BrowserRouter>
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Container>
        <MainPage />
      </Container>
      <Footer />
    </div>

    </BrowserRouter>
    </React.StrictMode>

  );
};

export default App;
