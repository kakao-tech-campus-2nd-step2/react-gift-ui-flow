import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyAccountPage from './pages/MyAccountPage';
import ThemePage from './pages/ThemePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const storedUser = sessionStorage.getItem('authToken');
    if (storedUser) {
      setIsLoggedIn(true);
      setUsername(storedUser);
    }
  }, []);

  const handleLogin = (name: string) => {
    setUsername(name);
    setIsLoggedIn(true);
    sessionStorage.setItem('authToken', name); // Save the username in sessionStorage
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
    sessionStorage.removeItem('authToken');
  };

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/my-account"
            element={
              isLoggedIn ? (
                <MyAccountPage username={username} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
