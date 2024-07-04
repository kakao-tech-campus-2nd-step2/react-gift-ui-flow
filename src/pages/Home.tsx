import React from 'react';
import { Header, Footer } from '@components/common';
import { FriendSelector, ThemeCategory, TrendingGifts } from '@components/home';

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
