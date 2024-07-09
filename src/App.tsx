import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from '@context/auth/AuthProvider';
import GlobalStyles from '@assets/styles';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Outlet />
    </AuthProvider>
  );
}

export default App;
