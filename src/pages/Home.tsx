import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Inner from '@components/common/Layout/Inner';
import FriendSelector from '@components/FriendSelector';

export default function Home() {
  return (
    <>
      <Inner maxWidth={1024}>
        <Header />
      </Inner>
      <FriendSelector />
      <Inner maxWidth={1024}>
        <Footer />
      </Inner>
    </>
  );
}
