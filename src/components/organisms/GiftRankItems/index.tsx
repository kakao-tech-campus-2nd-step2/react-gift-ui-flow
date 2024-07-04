import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import type { RankingGoodsItemsProps } from '@/components/molecules/GoodsItem/Ranking';
import { RankingGoodsItems } from '@/components/molecules/GoodsItem/Ranking';
import { GridItemsBox } from '@/components/molecules/GridItemsBox';
import type { IteratingItemProp } from '@/components/molecules/types/IteratingItemProp';

const item = {
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageSrc:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  subtitle: 'BBQ',
  title: `BBQ 양념치킨+크림치즈볼+콜라1.25L`,
  amount: 29000,
};

const mockData: (RankingGoodsItemsProps & IteratingItemProp)[] = [];

for (let i = 0; i < 21; i++) {
  mockData.push({ rankingIndex: i + 1, ...item, id: `${i}` });
}

export const GiftRankItems = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
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
