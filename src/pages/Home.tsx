import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import FriendSelector from '@components/FriendSelector';
import ThemeCategory from '@components/ThemeCategory';
import Target from '@components/Filter/Target';

export default function Home() {
  return (
    <>
      <Header />
      <FriendSelector />
      <ThemeCategory />
      <Target />
      <Footer />
    </>
  );
}
