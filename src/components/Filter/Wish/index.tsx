import React from 'react';
import Inner from '@/components/common/Layout/Inner';
import Container from '@/components/common/Layout/Container/Container';
import styled from '@emotion/styled';
import { FILTER_WISHS } from '../constants';

export default function Wish() {
  return (
    <Inner maxWidth={1024}>
      <WishContainer>
        <Container justifyContent="center" alignItems="center">
          {FILTER_WISHS.map((wish) => (
            <WishItem key={wish.id} type="button">
              {wish.wish}
            </WishItem>
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

const WishItem = styled.button`
  border: none;
  background-color: transparent;
  padding: 20px 30px;
  font-size: 22px;
  color: #4684e9b3;
  cursor: pointer;
`;
