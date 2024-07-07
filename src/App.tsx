import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';
import MyAccountPage from './page/MyAccountPage';
import ThemePage from './page/ThemePage';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
