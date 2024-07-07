import styled from '@emotion/styled';
import React from 'react';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';
import { defaultItems } from '@/utils/hooks/useCreateItems';

export const ThemeItemSection: React.FC = () => {
  const responsiveColumns = {
    initial: 2,
    xs: 2,
    sm: 2,
    md: 4,
    lg: 4,
  };
  return (
    <Wrapper>
      <Container>
        <Grid columns={responsiveColumns} gap={16}>
          {defaultItems.map((item) => (
            <DefaultGoodsItems
              key={item.title}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
            />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section({
  width: '100%',
  padding: '28px 16px 180px',
  [`@media screen and (min-width:${breakpoints.sm})`]: {
    padding: '40px 16px 360px',
  },
});