import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import MyPage from './components/pages/MyPage';
import ThemePage from './components/pages/ThemePage';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/theme/:themeKey" element={<ThemePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/my-account" element={<MyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
