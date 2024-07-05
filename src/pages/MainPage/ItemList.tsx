import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

interface Item {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

interface ItemListProps {
  items: Item[];
}

const ItemList = ({ items }: ItemListProps) => {
  const [filter1, setFilter1] = useState('모두가');
  const [filter2, setFilter2] = useState('받고 싶어한');
  const [visibleItems, setVisibleItems] = useState(6);

  const handleMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleLess = () => {
    setVisibleItems(6);
  };

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
        <Button onClick={handleMore} theme="outline" size="large">
          더보기
        </Button>
      ) : (
        <Button onClick={handleLess} theme="outline" size="large">
          접기
        </Button>
      )}
    </section>
  );
};

export default ItemList;
