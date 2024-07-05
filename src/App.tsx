import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import LoginPage from '@/pages/Login';
import MainPage from '@/pages/Main';
import MyAccountPage from '@/pages/MyAccount';
import ThemePage from '@/pages/Theme';

import { AuthProvider, useAuth } from './AuthContext';
import { Container } from './components/common/layouts/Container';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <div>
            <Header />
            <Container>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/theme/:themeKey" element={<ThemePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/my-account"
                  element={
                    <RequireAuth>
                      <MyAccountPage />
                    </RequireAuth>
                  }
                />
              </Routes>
            </Container>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
