import { type ReactNode } from 'react';
import { BrowserRouter, Navigate,Route, Routes } from 'react-router-dom';

import { AuthProvider, useAuth } from '@/components/AuthContext';
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import MyAccountPage from "@/pages/MyAccountPage";
import ThemePage from "@/pages/ThemePage";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={'/login'} replace />
  } else {
    return <>{children}</>;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/theme/:themeKey'} element={<ThemePage />} />
          <Route
            path={'/my-account'}
            element={
              <ProtectedRoute>
                <MyAccountPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
