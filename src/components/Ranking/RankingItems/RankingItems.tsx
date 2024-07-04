import React from 'react';

import { RankingGoodsItems } from '../../common/GoodsItem/Ranking';
import { Grid } from '../../common/layouts/Grid';

interface Item {
  id: number;
  category: string;
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

interface RankingItemsProps {
  items: Item[];
}

const RankingItems: React.FC<RankingItemsProps> = ({ items }) => {
  const handleItemClick = (itemId: number) => {
    console.log(`Item clicked: ${itemId}`);
  };

  return (
    <Grid columns={6} gap={20}>
      {items.map((item, index) => (
        <RankingGoodsItems
          key={item.id}
          rankingIndex={index + 1}
          imageSrc={item.imageSrc}
          subtitle={item.subtitle}
          title={item.title}
          amount={item.amount}
          onClick={() => handleItemClick(item.id)}
        />
      ))}
    </Grid>
  );
};

export default RankingItems;
