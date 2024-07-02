import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Main from '@pages/Main/Main';
import ThemePage from '@pages/ThemePage/ThemePage';
import { ROUTE_PATHS } from './constants';

const App = () => (
  <>
    <Global styles={resetStyles} />
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTE_PATHS.ROOT} Component={Main} />
          <Route path={ROUTE_PATHS.THEME} Component={ThemePage} />
        </Routes>
      </Layout>
    </Router>
  </>
);

export default App;
