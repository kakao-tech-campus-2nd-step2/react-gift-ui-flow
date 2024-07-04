import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface AppProps {
  themeKey?: string;
}

const App: React.FC<AppProps> = ({ themeKey = 'default' }) => {
  return (
    <div>
      <Header themeKey={themeKey} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
