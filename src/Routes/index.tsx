import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainPage } from '@/pages/Main';

import { ROUTE_PATHS } from './constants';

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.MAIN,
    element: <MainPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
