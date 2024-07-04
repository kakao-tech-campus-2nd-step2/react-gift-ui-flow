import styled from '@emotion/styled';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';

import { GoodsItems } from '../Home/Ranking/dummy';

export const GoodsList = () => {
  return (
    <Wrapper>
      <Grid columns={4} gap={20}>
        {GoodsItems.map((item) => (
          <DefaultGoodsItems
            imageSrc={item.imgSrc}
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
  max-width: ${breakpoints.md};
  margin: 30px auto;
`;
