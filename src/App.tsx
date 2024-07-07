import styled from '@emotion/styled';
import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyAccountPage from './pages/MyAccountPage';
import ThemePage from './pages/ThemePage';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState('');

  const handleLogin = (id: string) => {
    setIsLoggedIn(true);
    setLoginId(id);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginId('');
  };

  return (
    <Router>
      <AppWrapper>
        <Header isLoggedIn={isLoggedIn} />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route
              path="/my-account"
              element={
                isLoggedIn ? (
                  <MyAccountPage onLogout={handleLogout} loginId={loginId} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/theme/:themeKey" element={<ThemePage />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;
