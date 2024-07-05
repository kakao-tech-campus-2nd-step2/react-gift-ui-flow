import styled from '@emotion/styled';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import { AuthProvider, useAuth } from './components/common/AuthContext';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import MyAccoutpage from './pages/MyAccountpage';
import Themepage from './pages/Themepage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/theme/:themeKey" element={<Themepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route
              path="/my-account"
              element={
                <ProtectedRoute>
                  <MyAccoutpage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Content>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { authToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
  }, [authToken, navigate]);

  return authToken ? children : null;
};

export default App;

const Content = styled.div`
  padding: 20px;
`;
