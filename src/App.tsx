import type { PropsWithChildren } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './hooks/useAuth';
import { AuthProvider } from './store/AuthProvider';

import { MainLayout } from '@/components/Layout/MainLayout';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyAccountPage from '@/pages/MyAccountPage';
import ThemePage from '@/pages/ThemePage';
import { ResetStyles } from '@/styles/reset';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { authToken } = useAuth();
  return <>{authToken ? children : <Navigate to="/login" replace={true} />}</>;
};

const App = () => {
  return (
    <>
      <ResetStyles />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index path="/" element={<MainPage />} />
            <Route
              path="/my-account"
              element={
                <ProtectedRoute>
                  <MyAccountPage />
                </ProtectedRoute>
              }
            />
            <Route path="/theme/:themeKey" element={<ThemePage />} />;
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};
export default App;
