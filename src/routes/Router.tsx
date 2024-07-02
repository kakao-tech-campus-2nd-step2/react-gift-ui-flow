import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import MyAccount from '@/pages/MyAccount';
import Theme from '@/pages/Theme';

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/theme/:themeKey"
        element={
          <Layout>
            <Theme />
          </Layout>
        }
      />
      <Route
        path="/my-account"
        element={
          <Layout>
            <MyAccount />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
