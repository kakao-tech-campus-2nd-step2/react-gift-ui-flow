import styled from '@emotion/styled';
import React, { useState } from 'react';

import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';
import DetailButton from '@/components/Ranking/Detail/DetailButton';

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

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 80px auto;
`;

const RankingItems: React.FC<RankingItemsProps> = ({ items }) => {
  const [visibleCount, setVisibleCount] = useState(6);


  const handleShowMore = () => {
    setVisibleCount(prevCount => (prevCount < items.length ? prevCount + 15 : 6));
  };

  const buttonText = visibleCount < items.length ? '더보기' : '접기';

  return (
    <>
      <GridWrapper>
        <Grid columns={6} gap={20}>
          {items.slice(0, visibleCount).map((item, index) => (
            <RankingGoodsItems
              key={item.id}
              rankingIndex={index + 1}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
            />
          ))}
        </Grid>
      </GridWrapper>
      <DetailButton onClick={handleShowMore} text={buttonText} />
    </>
  );
};

export default RankingItems;
