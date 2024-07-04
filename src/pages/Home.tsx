import React from 'react';
import { FriendSelector, ThemeCategory, TrendingGifts } from '@components/home';

export default function Home() {
  return (
    <>
      <FriendSelector />
      <ThemeCategory />
      <TrendingGifts />
    </>
  );
}
