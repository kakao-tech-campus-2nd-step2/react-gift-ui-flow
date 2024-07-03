import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import { MyAccountPage } from '@/pages/MyAccount';
import { ThemePage } from '@/pages/Theme';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/theme/:themeKey" element={<ThemePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-account" element={<MyAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};
