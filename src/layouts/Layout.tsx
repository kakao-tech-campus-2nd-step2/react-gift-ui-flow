import type { ReactNode } from 'react';
import React from 'react';

import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';

// 명시적으로 children을 포함하는 타입을 정의합니다.
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header
        title="선물하기"
        imageUrl="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
      />
      <div style={{ paddingTop: '100px', paddingBottom: '88px' }}>{children}</div>
      <Footer content="카카오톡 선물하기" />
    </>
  );
};

export default Layout;
