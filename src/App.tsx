import { Layout } from '@/components/features/Layout';
import { Home } from '@/pages/Home';
// import { Theme } from '@/pages/Theme';
import { Login } from '@/pages/Login';
import { MyAccount } from '@/pages/MyAccount';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { RouterPath } from '@/routes';

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      { path: RouterPath.home, element: <Home /> },
      // { path: RouterPath.theme, element: <Theme /> },
      {
        path: RouterPath.myAccount,
        element: <MyAccount />,
      },
      {
        path: RouterPath.notFound,
        element: <Navigate to={RouterPath.home} />,
      },
    ],
  },
  { path: RouterPath.login, element: <Login /> },
]);

export default App;
