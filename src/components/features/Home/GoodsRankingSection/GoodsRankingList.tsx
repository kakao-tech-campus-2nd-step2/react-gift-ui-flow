import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { Grid } from '@/components/common/layouts/Grid';
import { RankingGoodsItems } from '@/components/common/GoodsItem/RankingGoodsItem';

type GoodsData = {
  id: number;
  name: string;
  imageURL: string;
  wish: {
    wishCount: number;
    isWished: boolean;
  };
  price: {
    basicPrice: number;
    discountRate: number;
    sellingPrice: number;
  };
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
};

type Props = {
  goodsList: GoodsData[];
};

export const GoodsRankingList = ({ goodsList }: Props) => {
  const [hasMore, setHasMore] = useState(false);

  const currentGoodsList = hasMore ? goodsList : goodsList.slice(0, 6);

  return (
    <StyledGoodsRankingList>
      <Grid columns={3} gap={16}>
        {currentGoodsList.map(({ id, imageURL, name, price, brandInfo }, index) => (
          <RankingGoodsItems
            key={id}
            rankingIndex={index + 1}
            imageSrc={imageURL}
            title={name}
            amount={price.sellingPrice}
            subtitle={brandInfo.name}
          />
        ))}
      </Grid>
      <ButtonWrapper>
        <Button
          theme="outline"
          style={{ maxWidth: '480px' }}
          onClick={() => {
            setHasMore((prev) => !prev);
          }}
        >
          {hasMore ? '접기' : '더보기'}
        </Button>
      </ButtonWrapper>
    </StyledGoodsRankingList>
  );
};

const StyledGoodsRankingList = styled.div`
  padding: 20px 0 30px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;
