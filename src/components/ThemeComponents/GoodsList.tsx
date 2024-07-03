import styled from '@emotion/styled';
import React from 'react';

import { DefaultGoodsItems } from '../common/GoodsItem/Default';

// 임의의 데이터 생성
const items = Array.from({ length: 21 }, (_, index) => ({
  id: index + 1,
  imageSrc:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  subtitle: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  title: `BBQ`,
  amount: 29000,
}));

const GoodsList: React.FC = () => {
  return (
    <GridContainer>
      {items.map((item) => (
        <DefaultGoodsItems
          key={item.id}
          imageSrc={item.imageSrc}
          subtitle={item.subtitle}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
`;

export default GoodsList;
