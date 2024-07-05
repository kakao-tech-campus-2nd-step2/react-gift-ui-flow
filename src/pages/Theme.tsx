import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '@/components/Category/CategoryHeader';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import rankingItems from '@/data/RankingItems';

const themeData: Record<
  string,
  { label: string; title: string; description: string; backgroundColor: string }
> = {
  birthday: {
    label: 'Birthday',
    title: 'Happy Birthday',
    description: 'Find the perfect birthday gift',
    backgroundColor: '#FF69B4',
  },
  graduation: {
    label: 'Graduation',
    title: 'Congratulations Graduate',
    description: 'Celebrate the big achievement',
    backgroundColor: '#4682B4',
  },
  smallLuxury: {
    label: 'Small Luxury',
    title: 'Small Luxury',
    description: 'A little luxury for someone special',
    backgroundColor: '#FFD700',
  },
  luxury: {
    label: 'Luxury',
    title: 'Luxury',
    description: 'The ultimate in luxury',
    backgroundColor: '#FFD700',
  },
  wedding: {
    label: 'Wedding',
    title: 'Wedding',
    description: 'Celebrate the big day',
    backgroundColor: '#FFD700',
  },
  warmGift: {
    label: 'Warm Gift',
    title: 'Warm Gift',
    description: 'A gift to warm the heart',
    backgroundColor: '#FFD700',
  },
  lightGift: {
    label: 'Light Gift',
    title: 'Light Gift',
    description: 'A light-hearted gift',
    backgroundColor: '#FFD700',
  },
  fan: {
    label: 'Fan',
    title: 'Fan',
    description: 'Gifts for the ultimate fan',
    backgroundColor: '#FFD700',
  },
  exchange: {
    label: 'Exchange',
    title: 'Exchange',
    description: 'Gifts for the ultimate fan',
    backgroundColor: '#FFD700',
  },
  health: {
    label: 'Health',
    title: 'Health',
    description: 'Gifts for the ultimate fan',
    backgroundColor: '#FFD700',
  },
  fruit: {
    label: 'Fruit',
    title: 'Fruit',
    description: 'Gifts for the ultimate fan',
    backgroundColor: '#FFD700',
  },

  kids: {
    label: 'Kids',
    title: 'Kids',
    description: 'Gifts for the ultimate fan',
    backgroundColor: '#FFD700',
  },
};

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  const theme =
    themeKey && themeData[themeKey]
      ? themeData[themeKey]
      : {
          label: 'Theme',
          title: 'Theme Page',
          description: 'Browse our collection',
          backgroundColor: '#333',
        };

  return (
    <Container>
      <Header
        label={theme.label}
        title={theme.title}
        description={theme.description}
        backgroundColor={theme.backgroundColor}
      />
      <Grid columns={3} gap={20}>
        {rankingItems.map((item) => (
          <RankingGoodsItems
            key={item.rankingIndex}
            rankingIndex={item.rankingIndex}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
            imageSrc={item.imageSrc}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ThemePage;

const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div<{ columns: number; gap: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap}px;
`;
