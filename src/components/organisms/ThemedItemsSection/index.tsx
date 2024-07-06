import styled from '@emotion/styled';
import { useLoaderData } from 'react-router-dom';

import type { ItemProps } from '@/components/atoms/IContainer/types';
import { CenteringContainer } from '@/components/molecules/CenteringContainer';
import type { DefaultGoodsItemsProps } from '@/components/molecules/GoodsItem/Default';
import { DefaultGoodsItems } from '@/components/molecules/GoodsItem/Default';
import { GridContainer } from '@/components/molecules/GridContainer';

export const ThemedItemsSection = () => {
  const mockData = useLoaderData() as (DefaultGoodsItemsProps & ItemProps)[];

  return (
    <ThemeFullBodyWrapper>
      <CenteringContainer maxWidth="1024px">
        <GridContainer
          columns={{
            initial: 2,
            md: 4,
          }}
          gap={16}
          items={mockData}
          component={DefaultGoodsItems}
        />
      </CenteringContainer>
    </ThemeFullBodyWrapper>
  );
};

const ThemeFullBodyWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 16px 360px;
`;
