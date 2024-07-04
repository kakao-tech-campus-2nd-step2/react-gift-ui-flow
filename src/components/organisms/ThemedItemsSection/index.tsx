import styled from '@emotion/styled';
import { useLoaderData } from 'react-router-dom';

import { Container } from '@/components/molecules/Container';
import type { DefaultGoodsItemsProps } from '@/components/molecules/GoodsItem/Default';
import { DefaultGoodsItems } from '@/components/molecules/GoodsItem/Default';
import { GridItemsBox } from '@/components/molecules/GridItemsBox';
import type { IteratingItemProp } from '@/components/molecules/types/IteratingItemProp';

export const ThemedItemsSection = () => {
  const mockData = useLoaderData() as (DefaultGoodsItemsProps & IteratingItemProp)[];

  return (
    <ThemeFullBodyWrapper>
      <Container maxWidth="1024px">
        <GridItemsBox
          columns={{
            initial: 2,
            md: 4,
          }}
          gap={16}
          gridItems={mockData}
          GridItemComponent={DefaultGoodsItems}
        />
      </Container>
    </ThemeFullBodyWrapper>
  );
};

const ThemeFullBodyWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 16px 360px;
`;
