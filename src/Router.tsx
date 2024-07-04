import { createBrowserRouter } from 'react-router-dom';

import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import MyPage from '@/pages/mypage/MyPage';
import RootPage from '@/pages/RootPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    children: [
      { index: true, path: '', element: <MainPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'my-account', element: <MyPage /> },
    ],
  },
]);
