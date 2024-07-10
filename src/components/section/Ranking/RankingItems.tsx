import styled from '@emotion/styled';

import { useState } from 'react';

import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

import type { RankingItemsProps } from './types/Ranking';

export const RankingItems = ({ items }: RankingItemsProps) => {
  const [count, setCount] = useState(6);
  const [isViewedMore, setIsViewedMore] = useState(false);

  const toggleViewMoreItems = () => {
    if (isViewedMore) {
      setCount(6);
    } else {
      setCount(items.length);
    }
    setIsViewedMore(!isViewedMore);
  };

  const responsiveColumns = {
    xs: 3,
    sm: 3,
    md: 4,
    lg: 6,
    xl: 6,
  };
  return (
    <Wrapper>
      <Grid columns={responsiveColumns} gap={16}>
        {items.slice(0, count).map((item) => (
          <RankingGoodsItems
            key={item.rankingIndex}
            rankingIndex={item.rankingIndex}
            imageSrc={item.imageSrc}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Grid>
      <ItemContainer>
        <ViewMoreButton onClick={toggleViewMoreItems}>
          {isViewedMore ? '접기' : '더보기'}
        </ViewMoreButton>
      </ItemContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0px 30px;
  @media screen and (min-width: 768px) {
    padding: 40px 0px 60px;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const ViewMoreButton = styled.button`
  width: 100%;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
  color: rgb(17, 17, 17);
  max-width: 480px;
  @media screen and (min-width: 768px) {
    height: 60px;
    font-size: 16px;
  }
`;
