import React from 'react';
import styled from '@emotion/styled';
import goodsItemList from '@data/goodsItemList';
import { GoodsItem, Grid, Inner } from '@components/common';

export default function GoodsItemList() {
  return (
    <GoodsItemListContainer>
      <Inner maxWidth={1024}>
        <Grid gap={14} columns={4}>
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
