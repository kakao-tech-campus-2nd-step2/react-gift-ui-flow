import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import FriendSelector from '@components/FriendSelector';
import ThemeCategory from '@components/ThemeCategory';
import Filter from '@components/Filter';
import Inner from '@components/common/Layout/Inner';

export default function Home() {
  return (
    <>
      <Header />
      <FriendSelector />
      <Inner maxWidth={1024}>
        <ThemeCategory />
      </Inner>
      <Inner maxWidth={1024}>
        <Filter />
      </Inner>
      <Footer />
    </>
  );
}
