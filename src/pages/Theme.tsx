import React from 'react';
import SectionHeader from '@components/common/SectionHeader';
import GoodsItemList from '@components/theme/GoodsItemList';
import { Header, Footer } from '@/components/common';

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
