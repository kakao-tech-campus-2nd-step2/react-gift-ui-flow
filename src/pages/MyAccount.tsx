import React from 'react';
import { Header, Footer } from '@components/common';
import AccountOverview from '@components/account/AccountOverview';

export default function MyAccount() {
  return (
    <>
      <Header />
      <AccountOverview />
      <Footer />
    </>
  );
}
