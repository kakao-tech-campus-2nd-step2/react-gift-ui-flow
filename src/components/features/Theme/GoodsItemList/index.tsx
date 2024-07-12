import React from 'react';
import styled from '@emotion/styled';
import goodsItemList from '@mocks/goodsItemList';
import { GoodsItem, Grid, CenteredContainer } from '@components/common';

const GRID_GAP = 14;
const GRID_COLUMNS = 4;

export default function GoodsItemList() {
  return (
    <GoodsItemListContainer>
      <CenteredContainer maxWidth="md">
        <Grid gap={GRID_GAP} columns={GRID_COLUMNS}>
          {goodsItemList.map(({ id, imageSrc, subtitle, title, amount }) => (
            <GoodsItem key={id} imageSrc={imageSrc} subtitle={subtitle} title={title} amount={amount} />
          ))}
        </Grid>
      </CenteredContainer>
    </GoodsItemListContainer>
  );
}

const GoodsItemListContainer = styled.section`
  padding-top: 40px;
  padding-bottom: 360px;
`;
