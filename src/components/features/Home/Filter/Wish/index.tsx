import React from 'react';
import { Container } from '@components/common';
import styled from '@emotion/styled';
import { FILTER_WISHS } from '../constants';
import WishItem from './WishItem';

export interface WishProps {
  selectedWish: string;
  selectWish: (wish: string) => void;
}

export default function Wish({ selectedWish, selectWish, ...rest }: WishProps) {
  return (
    <WishContainer {...rest}>
      <Container justifyContent="center" alignItems="center">
        {FILTER_WISHS.map(({ id, wish }) => (
          <WishItem key={id} wish={wish} selected={selectedWish === wish} onSelect={() => selectWish(wish)} />
        ))}
      </Container>
    </WishContainer>
  );
}

const WishContainer = styled.div`
  width: 100%;
  background-color: #e6f1ff;
  border-radius: 12px;
`;
