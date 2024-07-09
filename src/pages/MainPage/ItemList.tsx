import { useEffect, useState } from 'react';

import { Button } from '@/components/common/Button';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';
import { useCount } from '@/pages/MainPage/handleCount';
import { sortItems } from '@/pages/MainPage/sortItems';
import type { Item } from '@/pages/MainPage/types';

interface ItemListProps {
  items: Item[];
}

const ItemList = ({ items }: ItemListProps) => {
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');
  const { count, handleIncrease, handleReset } = useCount(6);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    const sortedItems = sortItems(items, sortOrder);
    setFilteredItems(sortedItems);
  }, [items, sortOrder]);

  return (
    <section>
      <h2>실시간 급상승 선물랭킹</h2>
      <div>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'ASC' | 'DESC')}>
          <option value="ASC">금액 낮은 순</option>
          <option value="DESC">금액 높은 순</option>
        </select>
      </div>
      <Grid columns={{ sm: 4, md: 5, lg: 6 }} gap={20}>
        {filteredItems.slice(0, count).map((item, index) => (
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
      {count < filteredItems.length ? (
        <Button onClick={handleIncrease} theme="outline" size="large">
          더보기
        </Button>
      ) : (
        <Button onClick={handleReset} theme="outline" size="large">
          접기
        </Button>
      )}
    </section>
  );
};

export default ItemList;
