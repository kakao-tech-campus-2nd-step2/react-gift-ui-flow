import './Theme.css';

import React from 'react';

import Banner from '@/components/common/Theme/Banner';
import ProductList from '@/components/common/Theme/ProductList';

export default function Theme() {
  return (
    <div className="theme-container">
      <Banner />
      <ProductList />
    </div>
  );
}
