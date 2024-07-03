import React, { useState } from 'react';
import Inner from '@/components/common/Layout/Inner';
import Container from '@/components/common/Layout/Container/Container';
import styled from '@emotion/styled';
import { FILTER_WISHS } from '../constants';
import WishItem from './WishItem';

export default function Wish() {
  const [selectedWish, setSelectedWish] = useState<string>(FILTER_WISHS[0].wish);

  return (
    <Inner maxWidth={1024}>
      <WishContainer>
        <Container justifyContent="center" alignItems="center">
          {FILTER_WISHS.map(({ id, wish }) => (
            <WishItem key={id} wish={wish} selected={selectedWish === wish} onSelect={() => setSelectedWish(wish)} />
          ))}
        </Container>
      </WishContainer>
    </Inner>
  );
}

const WishContainer = styled.div`
  width: 100%;
  background-color: #e6f1ff;
  border-radius: 12px;
`;
