import React from 'react';

import { AuthProvider, useAuth } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import AccountPage from './pages/AccountPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ThemePage from './pages/ThemePage';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ApplicationRoutes />
      </AuthProvider>
    </Router>
  );
};

const ApplicationRoutes = () => {
  const { isLoggedIn } = useAuth(); 
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
          <Route path="/account" element={
            isLoggedIn ? <AccountPage /> : <Navigate replace to="/login" />
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
