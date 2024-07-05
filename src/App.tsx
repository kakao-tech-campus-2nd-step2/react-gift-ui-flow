import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import Main from '@/pages/Main';
import Theme from '@/pages/Theme/[themeKey]';
import Login from '@/pages/Login';
import MyAccount from '@/pages/MyAccount';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { authToken } = useAuth();
  return authToken ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/theme/:themeKey" element={<Theme />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-account" element={<PrivateRoute><MyAccount /></PrivateRoute>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
