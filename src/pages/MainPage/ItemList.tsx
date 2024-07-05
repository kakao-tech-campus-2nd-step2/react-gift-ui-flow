import { useEffect, useState } from 'react';

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
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [visibleItems, setVisibleItems] = useState(6);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    const sortedItems = [...items].sort((a, b) =>
      sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount,
    );
    setFilteredItems(sortedItems);
  }, [items, sortOrder]);

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
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}>
          <option value="asc">금액 낮은 순</option>
          <option value="desc">금액 높은 순</option>
        </select>
      </div>
      <Grid columns={{ sm: 4, md: 5, lg: 6 }} gap={20}>
        {filteredItems.slice(0, visibleItems).map((item, index) => (
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
      {visibleItems < filteredItems.length ? (
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
