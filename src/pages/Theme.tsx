import React from 'react';
import { PageWrapper, SectionHeader } from '@components/common';
import { GoodsItemList } from '@components/theme';

export default function Theme() {
  return (
    <PageWrapper>
      <SectionHeader />
      <GoodsItemList />
    </PageWrapper>
  );
}
