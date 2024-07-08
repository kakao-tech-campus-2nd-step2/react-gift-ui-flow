import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyAccountPage from './pages/MyAccountPage';
import ThemePage from './pages/ThemePage';
import PrivateRoute from './PrivateRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/theme/:themeKey" element={<ThemePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-account" element={<PrivateRoute element={<MyAccountPage />} />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </AuthProvider>
  );
};

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn, username, logout } = useAuth();
  return (
    <Layout isLoggedIn={isLoggedIn} username={username} onLogout={logout}>
      {children}
    </Layout>
  );
};

export default App;
