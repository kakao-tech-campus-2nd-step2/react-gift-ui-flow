import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { GoodsRankingFilter } from './GoodsRankingFilter';
import { GoodsRankingList } from './GoodsRankingList';

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

const GoodsMockData: GoodsData = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  wish: {
    wishCount: 201,
    isWished: false,
  },
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000,
  },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
};

const GoodsMockList: GoodsData[] = Array.from({ length: 21 }, () => GoodsMockData);

export const GoodsRankingSection = () => {
  return (
    <StyledGoodsRankingSection>
      <Container>
        <Title>실시간 급상승 선물랭킹</Title>
        <GoodsRankingFilter />
        <GoodsRankingList goodsList={GoodsMockList} />
      </Container>
    </StyledGoodsRankingSection>
  );
};

const StyledGoodsRankingSection = styled.section`
  padding: 0px 16px 32px;
`;

const Title = styled.h2`
  color: #000;
  width: 100%;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
`;
