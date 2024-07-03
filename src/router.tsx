import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/Home';
import { ThemePage } from '@/pages/Theme';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/theme/:themeKey" element={<ThemePage />} />
      </Routes>
    </BrowserRouter>
  );
};
