import React from 'react';
import Layout from '@components/features/Layout';
import { SectionHeader } from '@components/common';
import { GoodsItemList } from '@components/features/Theme';

export default function Theme() {
  return (
    <Layout>
      <SectionHeader />
      <GoodsItemList />
    </Layout>
  );
}
