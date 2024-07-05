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

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="*"
              element={
                <DefaultLayout>
                  <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/theme/:themeKey" element={<ThemePage />} />
                    <Route
                      path="/my-account"
                      element={
                        <RequireAuth>
                          <MyAccountPage />
                        </RequireAuth>
                      }
                    />
                  </Routes>
                </DefaultLayout>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </React.StrictMode>
  );
};

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default App;
