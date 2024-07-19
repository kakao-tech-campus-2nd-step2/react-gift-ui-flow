import '@styles/mainLayout.css';

import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="mainLayout">
      <Header />
      <div className="mainLayout__contents">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
