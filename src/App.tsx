import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'src/components/pages/AuthContext';
import { Routes } from 'src/components/Routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter> 
    </AuthProvider>
  )
};

export default App;