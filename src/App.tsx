import styled from '@emotion/styled';
import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyAccountPage from './pages/MyAccountPage';
import ThemePage from './pages/ThemePage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  background-color: #f9f9f9;
`;

const CustomHeader: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return <Header isLoggedIn={isLoggedIn} />;
};

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContainer>
          <CustomHeader />
          <MainContent>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/my-account" element={<ProtectedRoute element={<MyAccountPage />} />} />
              <Route path="/theme/:themeKey" element={<ThemePage />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </AuthProvider>
  );
};

export default App;
