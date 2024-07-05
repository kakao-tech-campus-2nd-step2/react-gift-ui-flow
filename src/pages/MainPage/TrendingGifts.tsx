import { useState } from 'react';

import { Button } from '@/components/common/Button'; // Button 컴포넌트를 import
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

const TrendingGifts = () => {
  const [filter1, setFilter1] = useState('모두가');
  const [filter2, setFilter2] = useState('받고 싶어한');
  const [visibleItems, setVisibleItems] = useState(6);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleShowLess = () => {
    setVisibleItems(6);
  };

  const items = Array.from({ length: 20 }, (_, index) => ({
    imageSrc: `https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240328114550_e72d7854bfb649c68c6bea6a1b85262b.jpg`,
    subtitle: `오제티캔들`,
    title: `브이 햄스터 캔들 / 향초 선물 불멍`,
    amount: 10000,
  }));

  return (
    <section>
      <h2>실시간 급상승 선물랭킹</h2>
      <div>
        <select value={filter1} onChange={(e) => setFilter1(e.target.value)}>
          <option value="모두가">모두가</option>
          <option value="여성이">여성이</option>
          <option value="남성이">남성이</option>
          <option value="청소년">청소년이</option>
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
