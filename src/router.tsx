import { createBrowserRouter, Outlet } from 'react-router-dom';

import { AUTH, PATHS } from '@/constants/Path';
import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import ThemePage from '@/pages/theme/ThemePage';
import MyAccountPage from '@/pages/my-account/MyAccountPage';
import Layout from '@/components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: PATHS.MAIN,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: PATHS.BIRTHDAY,
        element: <ThemePage />,
      },
    ],
  },
  {
    path: AUTH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: AUTH.MY_ACCOUNT,
    element: <MyAccountPage />,
  },
]);