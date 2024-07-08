import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Mainpage from './pages/MainPage';
import ThemePage from './pages/ThemePage';
import LoginPage from './pages/LoginPage';
import PATH from './components/constants';
import MyPage from './pages/MyPage';
import { AuthProvider } from './components/AuthContext';
import { ReactNode } from 'react';

// import { useAuth } from './components/AuthContext';
interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // const { isAuth } = useAuth();

  const token = sessionStorage.getItem('authToken');

  if (!token) {
    alert('권한이 없습니다. 로그인 페이지로 이동합니다.');
    return <Navigate to={PATH.LOGINPAGE} replace />;
  } else {
    alert('권한이 있습니다.');
    return <>{children}</>;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAINPAGE} element={<Mainpage />} />
          <Route path={PATH.LOGINPAGE} element={<LoginPage />} />
          <Route path={PATH.THEMEPAGE} element={<ThemePage />} />
          <Route
            path={PATH.MYPAGE}
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
