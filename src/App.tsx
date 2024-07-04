import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/feature/Layout/MainLayout';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyAccountPage from '@/pages/MyAccountPage';
import ThemePage from '@/pages/ThemePage';
import { ResetStyles } from '@/styles/reset';

const App = () => {
  return (
    <>
      <ResetStyles />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
