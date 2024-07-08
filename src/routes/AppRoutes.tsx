//import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Login from '@/pages/Login';
import Main from '@/pages/Main';
import Mypage from '@/pages/Mypage';
import Theme from '@/pages/Theme';

import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/theme/:themeKey" element={<Theme />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/my-account"
        element={
          <ProtectedRoute>
            <Mypage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
