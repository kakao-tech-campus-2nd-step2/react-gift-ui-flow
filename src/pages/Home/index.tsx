import React from 'react';
import Layout from '@components/features/Layout';
import { FriendSelector, FriendGiftRecommendation, ThemeCategory, TrendingGifts } from '@/components/features/Home';

export default function Home() {
  return (
    <Layout>
      <FriendSelector />
      <ThemeCategory />
      <FriendGiftRecommendation />
      <TrendingGifts />
    </Layout>
  );
}
