import React from 'react';
import { FriendSelector, ThemeCategory, TrendingGifts } from '@components/home';
import { Header, Footer } from '@/components/common';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FriendSelector />
        <ThemeCategory />
        <TrendingGifts />
      </main>
      <Footer />
    </>
  );
}
