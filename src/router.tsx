import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { MyAccountPage } from '@/pages/MyAccountPage';
import { ThemePage } from '@/pages/ThemePage';

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
