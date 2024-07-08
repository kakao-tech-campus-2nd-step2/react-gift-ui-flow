import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';

import { GoodsItems } from './dummy';

export const Rankings = () => {
  const [more, setMore] = useState(false);

  return (
    <Wrapper>
      <Grid columns={6} gap={15}>
        {GoodsItems.filter((_item, idx) => (!more ? idx < 6 : idx >= 0)).map((goods) => (
          <RankingGoodsItems
            key={goods.rankingIndex}
            rankingIndex={goods.rankingIndex}
            imageSrc={goods.imgSrc}
            subtitle={goods.subtitle}
            title={goods.title}
            amount={goods.amount}
          />
        ))}
      </Grid>
      <Button
        theme="outline"
        style={{
          width: 500,
          margin: '30px auto',
        }}
        onClick={() => setMore(!more)}
      >
        {more ? '접기' : '더보기'}
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: ${breakpoints.md};
  margin: 50px 0;
`;
