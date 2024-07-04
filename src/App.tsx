import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import AccountPage from './pages/AccountPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ThemePage from './pages/ThemePage';

const AppContent: React.FC<{ isLoggedIn: boolean; username: string; onLogout: () => void; onLogin: (username: string) => void; }> = ({ isLoggedIn, username, onLogout, onLogin }) => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return (
    <div>
      {!isLoginRoute && <Header isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
          <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
          <Route path="/account" element={<AccountPage username={username} onLogout={onLogout} />} />
        </Routes>
      </main>
      {!isLoginRoute && <Footer />}
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const handleLogin = (username: string) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser('');
  };

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} username={user} onLogout={handleLogout} onLogin={handleLogin} />
    </Router>
  );
};

export default App;
