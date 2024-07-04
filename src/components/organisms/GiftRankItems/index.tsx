import styled from '@emotion/styled';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Button } from '@/components/atoms/Button';
import type { RankingGoodsItemsProps } from '@/components/molecules/GoodsItem/Ranking';
import { RankingGoodsItems } from '@/components/molecules/GoodsItem/Ranking';
import { GridItemsBox } from '@/components/molecules/GridItemsBox';
import type { IteratingItemProp } from '@/components/molecules/types/IteratingItemProp';

export const GiftRankItems = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const mockData = useLoaderData() as (RankingGoodsItemsProps & IteratingItemProp)[];
  const showData = isClicked ? mockData : mockData.slice(0, 6);

  return (
    <Wrapper>
      <GridItemsBox
        columns={{
          initial: 3,
          sm: 4,
          md: 6,
        }}
        gap={16}
        gridItems={showData}
        GridItemComponent={RankingGoodsItems}
      />
      <Button
        theme="outline"
        style={{ maxWidth: '480px', margin: '30px auto 0 auto' }}
        onClick={() => {
          setIsClicked((prev) => !prev);
        }}
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
