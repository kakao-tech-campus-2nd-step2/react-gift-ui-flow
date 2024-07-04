import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import FriendSelector from '@components/home/FriendSelector';
import ThemeCategory from '@components/home/ThemeCategory';
import TrendingGifts from '@components/home/TrendingGifts';

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
