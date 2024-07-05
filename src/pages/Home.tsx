import React from 'react';
import { FriendSelector, FriendGiftRecommendation, ThemeCategory, TrendingGifts } from '@components/home';
import { Header, Footer } from '@components/common';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FriendSelector />
        <ThemeCategory />
        <FriendGiftRecommendation />
        <TrendingGifts />
      </main>
      <Footer />
    </>
  );
}
