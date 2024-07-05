import styled from '@emotion/styled';
import { useState } from 'react';

import AgeTabs from './AgeTabs';
import ProductList from './ProductList';
import TypeTabs from './TypeTabs';

const GiftRankingPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeType, setActiveType] = useState<string>('wanted');

  return (
    <PageWrapper>
      <Title>실시간 급상승 선물랭킹</Title>
      <AgeTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <TypeTabs activeType={activeType} setActiveType={setActiveType} />
      <ProductList activeCategory={activeCategory} activeType={activeType} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export default GiftRankingPage;
