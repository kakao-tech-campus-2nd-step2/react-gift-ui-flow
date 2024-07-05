import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer'; // assuming you have a Footer component
import Header from '@/components/Header'; // assuming you have a Header component
import { AuthProvider } from '@/context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  );
};

export default App;
