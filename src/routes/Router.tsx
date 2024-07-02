import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import MyAccount from '@/pages/MyAccount';
import Theme from '@/pages/Theme';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theme/:themeKey" element={<Theme />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-account" element={<MyAccount />} />
    </Routes>
  );
};

export default Router;
