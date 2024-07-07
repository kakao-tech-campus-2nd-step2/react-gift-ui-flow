import { Layout } from '@/components/features/Layout';
import { Home } from '@/pages/Home';
import { AuthProvider } from '@/auth/AuthProvider';
import { Login } from '@/pages/Login';
import { MyAccount } from '@/pages/MyAccount';
import { RouterPath } from '@/routes';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from '@/auth/RequireAuth';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      { path: RouterPath.home, element: <Home /> },
      {
        path: RouterPath.myAccount,
        element: (
          <RequireAuth>
            <MyAccount />
          </RequireAuth>
        ),
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
