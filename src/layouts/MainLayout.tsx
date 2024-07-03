import '@styles/mainLayout.css';

import Header from '@components/common/Header';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="mainLayout">
      <Header />
      <div className="mainLayout__contents">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
