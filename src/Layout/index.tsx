import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/Layout/Footer';
import Header from '@/Layout/Header';

interface LayoutProps {
  isLoggedIn: boolean;
}

const Layout: React.FC<LayoutProps> = ({ isLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
