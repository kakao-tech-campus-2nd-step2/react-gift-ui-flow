import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './routes/Main';
import ThemePage from './routes/ThemePage';
import LoginPage from './routes/LoginPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <AppContainer>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theme/life_small_gift" element={<ThemePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
