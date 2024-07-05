import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainPage from '@/pages/Main';
import ThemePage from '@/pages/Theme';

import { ROUTE_PATHS } from './constants';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.MAIN} element={<MainPage />} />
      <Route path={ROUTE_PATHS.THEME} element={<ThemePage />} />
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <RoutesComponent />
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
