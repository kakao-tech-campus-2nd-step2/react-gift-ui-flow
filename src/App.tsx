import styled from '@emotion/styled';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './routes/Main';
import ThemePage from './routes/ThemePage';
import LoginPage from './routes/LoginPage';
import MyPage from './routes/MyPage';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
};

const AppContent = () => {
  const { checkAuthToken } = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    checkAuthToken();
  }, [checkAuthToken]);

  return (
    <AppContainer>
      {!isLoginPage && <Header />}
      <ContentContainer isLoginPage={isLoginPage}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/theme/life_small_gift"
            element={
              <PrivateRoute>
                <ThemePage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/my-account"
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </ContentContainer>
      {!isLoginPage && <Footer />}
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const ContentContainer = styled.div<{ isLoginPage: boolean }>`
  padding-top: ${({ isLoginPage }) => (isLoginPage ? '0' : '54px')};
  width: 100%;
`;
