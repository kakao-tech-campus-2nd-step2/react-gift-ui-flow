import React from 'react';
import { Header, Footer, SectionHeader } from '@components/common';
import { GoodsItemList } from '@components/theme';

export default function Theme() {
  return (
    <>
      <Header />
      <main>
        <SectionHeader />
        <GoodsItemList />
      </main>
      <Footer />
    </>
  );
}
