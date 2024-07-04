import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/Layout/Footer';
import Header from '@/Layout/Header';

interface LayoutProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
