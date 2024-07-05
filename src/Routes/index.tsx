import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LoginPage from '@/pages/Login';
import MainPage from '@/pages/Main';
import MyAccountPage from '@/pages/MyAccount';
import ThemePage from '@/pages/Theme';

import { ROUTE_PATHS } from './constants';
import PrivateRoute from './privateRoute';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.MAIN} element={<MainPage />} />
      <Route path={ROUTE_PATHS.THEME} element={<ThemePage />} />
      <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTE_PATHS.MY_ACCOUNT}
        element={<PrivateRoute element={<MyAccountPage />} path={''} />}
      />
    </Routes>
  );
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === ROUTE_PATHS.LOGIN;

  return (
    <div>
      {!isLoginPage && <Header />}
      {children}
      {!isLoginPage && <Footer />}
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <RoutesComponent />
      </Layout>
    </Router>
  );
};

export default AppRoutes;
