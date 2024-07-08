import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './store/AuthProvider';

import { MainLayout } from '@/components/Layout/MainLayout';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyAccountPage from '@/pages/MyAccountPage';
import ThemePage from '@/pages/ThemePage';
import { ResetStyles } from '@/styles/reset';

const App = () => {
  return (
    <>
      <ResetStyles />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index path="/" element={<MainPage />} />
            <Route path="/theme/:themeKey" element={<ThemePage />} />
            <Route path="/my-account" element={<MyAccountPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};
export default App;
