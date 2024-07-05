import React, { useState } from 'react';

import { Button } from '@/components/common/Button'; // Button 컴포넌트를 import
import { RankingGoodsItems } from '@/components/common/GoodsItem/RankingGoodsItems';
import { Grid } from '@/components/common/layouts/Grid';

const TrendingGifts = () => {
  const [filter1, setFilter1] = useState('전체');
  const [filter2, setFilter2] = useState('받고 싶어한');
  const [visibleItems, setVisibleItems] = useState(6);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleShowLess = () => {
    setVisibleItems(6);
  };

  const items = Array.from({ length: 20 }, (_, index) => ({
    imageSrc: `https://via.placeholder.com/150`,
    subtitle: `Subtitle ${index + 1}`,
    title: `Product Title ${index + 1}`,
    amount: (index + 1) * 1000,
  }));

  return (
    <section>
      <h2>실시간 급상승 선물랭킹</h2>
      <div>
        <label>Filter by:</label>
        <select value={filter1} onChange={(e) => setFilter1(e.target.value)}>
          <option value="전체">전체</option>
          <option value="여성">여성</option>
          <option value="남성">남성</option>
          <option value="청소년">청소년</option>
        </select>
        <select value={filter2} onChange={(e) => setFilter2(e.target.value)}>
          <option value="받고 싶어한">받고 싶어한</option>
          <option value="많이 선물한">많이 선물한</option>
          <option value="위시로 받은">위시로 받은</option>
        </select>
      </div>
      <Grid columns={{ sm: 4, md: 5, lg: 6 }} gap={20}>
        {items.slice(0, visibleItems).map((item, index) => (
          <RankingGoodsItems
            key={index}
            rankingIndex={index + 1}
            imageSrc={item.imageSrc}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Grid>
      {visibleItems < items.length ? (
        <Button onClick={handleLoadMore} theme="outline" size="large">
          더보기
        </Button>
      ) : (
        <Button onClick={handleShowLess} theme="outline" size="large">
          접기
        </Button>
      )}
    </section>
  );
};

export default TrendingGifts;
