import React, { createContext, useState, useEffect, useMemo } from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Main from '@pages/Main/Main';
import ThemePage from '@pages/ThemePage/ThemePage';
import LoginPage from '@pages/Login/LoginPage';
import MyAccountPage from '@pages/MyAccount/MyAccount';
import { ROUTE_PATHS } from './constants';

const AuthContext = createContext({
  isLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login: (id: string) => {},
  logout: () => {},
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('authToken'));

  const login = (id: string) => {
    sessionStorage.setItem('authToken', id);
    setIsLoggedIn(true);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!sessionStorage.getItem('authToken'));
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
    }),
    [isLoggedIn],
  );

  return (
    <>
      <Global styles={resetStyles} />
      <AuthContext.Provider value={value}>
        <Router>
          <Layout>
            <Routes>
              <Route path={ROUTE_PATHS.ROOT} Component={Main} />
              <Route path={ROUTE_PATHS.THEME} Component={ThemePage} />
              <Route path={ROUTE_PATHS.LOGIN} Component={LoginPage} />
              <Route path={ROUTE_PATHS.MYACCOUNT} Component={MyAccountPage} />
            </Routes>
          </Layout>
        </Router>
      </AuthContext.Provider>
    </>
  );
};

export { AuthContext };
export default App;
