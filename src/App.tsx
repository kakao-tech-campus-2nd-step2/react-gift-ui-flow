import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import MainPage from '@/pages/Main';
import ThemePage from '@/pages/Theme';

import { Container } from './components/common/layouts/Container';

const App = () => {
  const isLoggedIn = false;

  return (
    <React.StrictMode>
      <Router>
        <div>
          <Header isLoggedIn={isLoggedIn} />
          <Container>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/theme/:themeKey" element={<ThemePage />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
};

export default App;
