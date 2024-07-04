import React from 'react';

import { RankingGoodsItems } from '../../common/GoodsItem/Ranking'
import { Grid } from '../../common/layouts/Grid';

const items = [
  { id: 1, imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: '상품설명 1', title: '상품명 1', amount: 10000 },
  { id: 2, imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: '상품설명 1', title: '상품명 2', amount: 20000 },
  { id: 3, imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: '상품설명 1', title: '상품명 2', amount: 20000 },
  { id: 4, imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: '상품설명 1', title: '상품명 2', amount: 20000 },
  { id: 5, imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: '상품설명 2', title: '상품명 2', amount: 20000 },
  { id: 6, imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: '상품설명 2', title: '상품명 2', amount: 20000 },
];

const RankingItems: React.FC = () => {
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
          onClick={() => handleItemClick(item.id)} // 클릭 이벤트 핸들러 전달
        />
      ))}
    </Grid>
  );
};

export default RankingItems;
