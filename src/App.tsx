// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '@/AuthContext';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import { Container } from '@/components/common/layouts/Container';
import LoginPage from '@/pages/Login';
import MainPage from '@/pages/Main';
import ThemePage from '@/pages/Theme';

const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <div>
            <Header />
            <Container>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/theme/:themeKey" element={<ThemePage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Container>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
