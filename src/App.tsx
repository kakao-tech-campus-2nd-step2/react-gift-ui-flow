import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@assets/styles/resetStyles';
import { Outlet } from 'react-router-dom';
import AuthProvider from '@context/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Global styles={resetStyles} />
      <Outlet />
    </AuthProvider>
  );
}

export default App;
