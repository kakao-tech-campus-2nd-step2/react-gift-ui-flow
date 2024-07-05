import React from 'react';
import { BrowserRouter as Router, Navigate,Route, Routes } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './pages/loginpage';
import MainPage from './pages/mainpage';
import MyPage from './pages/mypage';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-account" element={<PrivateRoute component={MyPage} />} />
      </Routes>
    </AuthProvider>
  </Router>
);

const PrivateRoute: React.FC<{ component: React.ComponentType }> = ({ component: Component }) => {
  const { user } = useAuth();
  return user ? <Component /> : <Navigate to="/login" />;
};

export default App;
