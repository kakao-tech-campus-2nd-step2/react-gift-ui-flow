import { createBrowserRouter } from 'react-router-dom';

import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import MyPage from '@/pages/mypage/MyPage';
import ProtectedRoute from '@/pages/mypage/ProtectedRoute';
import RootPage from '@/pages/RootPage';
import ThemePage from '@/pages/theme/ThemePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    children: [
      { index: true, path: '', element: <MainPage /> },
      {
        path: 'my-account',
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        ),
      },
      { path: 'theme/:themeId', element: <ThemePage /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
