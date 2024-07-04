import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "./Footer";
import Header from "./Header";
import LoginPage from './LoginPage/LoginPage';
import Main from "./MainPage/Main";
import MyAccountPage from './MyAccountPage';
import ThemePage from "./ThemePage/Theme";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const handleLogin = (newUsername: string) => {
    setIsLoggedIn(true);
    setUsername(newUsername);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', newUsername);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };


  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/theme/:themeKey" Component={ThemePage} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/my-account" element={<MyAccountPage username={username} onLogout={handleLogout} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
