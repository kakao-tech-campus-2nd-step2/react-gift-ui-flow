import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface WishItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  wish: string;
  selected: boolean;
  onSelect: () => void;
}

export default function WishItem({ wish, selected, onSelect, ...rest }: WishItemProps) {
  return (
    <WishItemContainer type="button" selected={selected} onClick={onSelect} {...rest}>
      {wish}
    </WishItemContainer>
  );
}

const WishItemContainer = styled.button<{ selected: boolean }>`
  border: none;
  background-color: transparent;
  padding: 20px 30px;
  font-size: 22px;
  color: ${({ selected }) => (selected ? '#4684e9' : '#4684e9b3')};
  transition: all 0.2s;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  cursor: pointer;
`;
