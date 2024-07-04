import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyAccountPage from './pages/MyAccountPage';
import ThemePage from './pages/ThemePage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
