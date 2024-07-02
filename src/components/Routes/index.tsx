import { Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { MyAccount } from '@/pages/MyAccount';
import { Theme } from '@/pages/Theme';

import { Layout } from '../Layout';

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Route>
    </Routes>
  );
};
