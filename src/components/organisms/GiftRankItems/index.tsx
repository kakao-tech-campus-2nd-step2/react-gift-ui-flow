import styled from '@emotion/styled';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Button } from '@/components/atoms/Button';
import type { ItemProps } from '@/components/atoms/ItemsIterator/types';
import type { RankingGoodsItemsProps } from '@/components/molecules/GoodsItem/Ranking';
import { RankingGoodsItems } from '@/components/molecules/GoodsItem/Ranking';
import { GridContainer } from '@/components/molecules/GridContainer';

export const GiftRankItems = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const mockData = useLoaderData() as (RankingGoodsItemsProps & ItemProps)[];
  const showData = isClicked ? mockData : mockData.slice(0, 6);
  const onClickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Wrapper>
      <GridContainer
        columns={{
          initial: 3,
          sm: 4,
          md: 6,
        }}
        gap={16}
        items={showData}
        component={RankingGoodsItems}
      />
      <Button
        theme="outline"
        style={{ maxWidth: '480px', margin: '30px auto 0 auto' }}
        onClick={onClickHandler}
      >
        {isClicked ? '접기' : '더보기'}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px 16px 30px 16px;
`;
