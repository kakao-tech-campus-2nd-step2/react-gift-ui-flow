// import styled from '@emotion/styled';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ThemeHeader from '@/components/Category/ThemeHeader';
import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import rankingItems from '@/data/RankingItems';
import { breakpoints } from '@/styles/variants';

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();
  const [columns, setColumns] = useState(3);

  const updateGridColumns = () => {
      const width = window.innerWidth;
      if (width < parseInt(breakpoints.xs)) {
        setColumns(2);
      } else {
        setColumns(4);
      }
  };

  useEffect(() => {
    updateGridColumns();
    window.addEventListener('resize', updateGridColumns);
    return () => {
      window.removeEventListener('resize', updateGridColumns);
    };
  }, []);

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
      <ThemeHeader
        label={theme.label}
        title={theme.title}
        description={theme.description}
        backgroundColor={theme.backgroundColor}
      />
      <DefaultItemContainer>
        <Grid columns={columns} gap={10}>
          {rankingItems.map((item) => (
            <DefaultGoodsItems
              key={item.rankingIndex} // Ensure you have a unique key, might need to adjust depending on data structure
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
              imageSrc={item.imageSrc}
            />
          ))}
        </Grid>
      </DefaultItemContainer>
    </Container>
  );
};

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

const DefaultItemContainer = styled(Container)`
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 0 12vw;
`;

export default ThemePage;
