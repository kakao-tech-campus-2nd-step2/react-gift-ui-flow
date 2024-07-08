import styled from '@emotion/styled';

import { GoodsItem } from '@/components/common/GoodsItem';
import { Container } from '@/components/common/Layout/Container';
import { Grid } from '@/components/common/Layout/Grid';
import { goodsItems } from '@/constant/GoodsItems';

export const ItemList = () => {
  return (
    <ListWrapper>
      <Container justifyContent="center" alignItems="center" maxWidth="1024px">
        <Grid columns={{ init: 2, sm: 2, md: 4 }} gap={20}>
          {goodsItems.map((item) => (
            <GoodsItem
              key={item.key}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
            />
          ))}
        </Grid>
      </Container>
    </ListWrapper>
  );
};
const ListWrapper = styled.section`
  width: 100%;
  padding: 40px 20px;
`;
