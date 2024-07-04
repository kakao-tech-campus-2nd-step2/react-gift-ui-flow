import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ThemePage from './pages/ThemePage';

const AppContent = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return (
    <div>
      {!isLoginRoute && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
        </Routes>
      </main>
      {!isLoginRoute && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
