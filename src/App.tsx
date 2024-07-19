
import React from 'react';
import { BrowserRouter as Router, Navigate,Route, Routes } from 'react-router-dom';

import { AuthProvider, useAuth } from "./ContextApi";
import Footer from "./Footer";
import Header from "./Header";
import LoginPage from "./LoginPage/LoginPage";
import Main from "./MainPage/Main";
import MyAccountPage from "./MyAccountPage";
import ThemePage from "./ThemePage/Theme";

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/theme/:themeKey" Component={ThemePage} />
          <Route path="/login" Component={LoginPage} />
          {isLoggedIn ? (
            <Route path="/my-account" element={<MyAccountPage />} />
          ) : (
            <Navigate to="/login" />
          )}
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>

  );
};

export default App;
