import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
