import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import FriendSelector from '@components/home/FriendSelector';
import ThemeCategory from '@components/home/ThemeCategory';
import Filter from '@components/home/Filter';
import Inner from '@components/common/Layout/Inner';
import RankingList from '@components/home/RankingList';

export default function Home() {
  return (
    <>
      <Header />
      <FriendSelector />
      <Inner maxWidth={1024}>
        <ThemeCategory />
        <Filter />
        <RankingList />
      </Inner>
      <Footer />
    </>
  );
}
