import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Main from '@pages/Main/Main';

const App = () => (
  <>
    <Global styles={resetStyles} />
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={Main} />
        </Routes>
      </Layout>
    </Router>
  </>
);

export default App;
