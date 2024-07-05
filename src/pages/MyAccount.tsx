import React from 'react';
import { Header, Footer } from '@components/common';
import { AccountOverview } from '@components/account';

export default function MyAccount() {
  return (
    <>
      <Header />
      <main>
        <AccountOverview />
      </main>
      <Footer />
    </>
  );
}
