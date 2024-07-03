import styled from '@emotion/styled';

import itemThumbnail from '@/assets/images/itemThumbnail.jpg';
import { type DefaultGoodsItemsProps } from '@/components/common/GoodsItem/Default';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

interface Item extends Omit<DefaultGoodsItemsProps, 'rankingIndex'> {
  rankingIndex: number;
}

const createItems = (): Item[] => {
  return Array.from({ length: 21 }, (_, index) => ({
    rankingIndex: index + 1,
    imageSrc: itemThumbnail,
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  }));
};

const items: Item[] = createItems();

export const RankingItems = () => {
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
        {items.map((item, index) => (
          <RankingGoodsItems
            key={index}
            rankingIndex={item.rankingIndex}
            imageSrc={item.imageSrc}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0px 30px;
  @media screen and (min-width: 768px) {
    padding: 40px 0px 60px;
  }
`;
