import React, { useContext } from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Main from '@pages/Main/Main';
import ThemePage from '@pages/ThemePage/ThemePage';
import LoginPage from '@pages/Login/LoginPage';
import MyAccountPage from '@pages/MyAccount/MyAccountPage';
import { AuthProvider, AuthContext } from '@contexts/AuthContext';
import { ROUTE_PATHS } from './constants';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Global styles={resetStyles} />
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path={ROUTE_PATHS.ROOT} Component={Main} />
              <Route path={ROUTE_PATHS.THEME} Component={ThemePage} />
              <Route path={ROUTE_PATHS.LOGIN} Component={LoginPage} />
              <Route
                path={ROUTE_PATHS.MYACCOUNT}
                element={
                  isLoggedIn ? (
                    <MyAccountPage />
                  ) : (
                    <Navigate to={ROUTE_PATHS.LOGIN} />
                  )
                }
              />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
