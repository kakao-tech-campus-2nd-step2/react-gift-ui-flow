import React from 'react';
import { PageWrapper } from '@components/common';
import { FriendSelector, FriendGiftRecommendation, ThemeCategory, TrendingGifts } from '@components/home';

export default function Home() {
  return (
    <PageWrapper>
      <FriendSelector />
      <ThemeCategory />
      <FriendGiftRecommendation />
      <TrendingGifts />
    </PageWrapper>
  );
}
