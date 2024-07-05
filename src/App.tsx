// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import LoginPage from '@/pages/Login';
import MainPage from '@/pages/Main';
import MyAccountPage from '@/pages/MyAccount';
import ThemePage from '@/pages/Theme';

import { AuthProvider } from './AuthContext';
import { Container } from './components/common/layouts/Container';

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
                <Route path="/my-account" element={<MyAccountPage />} />
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
