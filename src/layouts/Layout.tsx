import type { ReactNode } from 'react';
import React from 'react';

import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';

interface LayoutProps {
  children: ReactNode;
  isLoggedIn: boolean;
  username: string;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isLoggedIn,
  username: _username,
  onLogout: _onLogout,
}) => {
  return (
    <>
      <Header
        title="선물하기"
        imageUrl="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
        isLoggedIn={isLoggedIn}
      />
      <div style={{ paddingTop: '100px', paddingBottom: '88px' }}>{children}</div>
      <Footer content="카카오톡 선물하기" />
    </>
  );
};

export default Layout;
