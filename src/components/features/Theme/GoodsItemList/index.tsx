import React from 'react';
import styled from '@emotion/styled';
import goodsItemList from '@mocks/goodsItemList';
import { GoodsItem, Grid, Inner } from '@components/common';
import { BREAK_POINTS } from '@assets/styles/variants';

const GRID_GAP = 14;
const GRID_COLUMNS = 4;

export default function GoodsItemList() {
  return (
    <GoodsItemListContainer>
      <Inner maxWidth={BREAK_POINTS.md}>
        <Grid gap={GRID_GAP} columns={GRID_COLUMNS}>
          {goodsItemList.map(({ id, imageSrc, subtitle, title, amount, target, wish }) => (
            <GoodsItem key={id} {...{ imageSrc, subtitle, title, amount, target, wish }} />
          ))}
        </Grid>
      </Inner>
    </GoodsItemListContainer>
  );
}

const GoodsItemListContainer = styled.section`
  padding-top: 40px;
  padding-bottom: 360px;
`;
