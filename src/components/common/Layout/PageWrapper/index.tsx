import React, { ReactNode } from 'react';
import { Header, Footer } from '@components/common';

export interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
