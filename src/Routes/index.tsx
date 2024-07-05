import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainPage } from '@/pages/Main';
import { ThemePage } from '@/pages/Theme';

import { ROUTE_PATHS } from './constants';

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.MAIN,
    element: <MainPage />,
  },
  {
    path: ROUTE_PATHS.THEME,
    element: <ThemePage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
