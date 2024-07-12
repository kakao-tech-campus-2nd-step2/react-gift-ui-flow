import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface TargetItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  target: string;
  selected: boolean;
  onSelect: () => void;
}

export default function TargetItem({ icon, target, selected, onSelect, ...rest }: TargetItemProps) {
  return (
    <TargetContainer type="button" onClick={onSelect} {...rest}>
      <IconContainer selected={selected}>{icon}</IconContainer>
      <Text selected={selected}>{target}</Text>
    </TargetContainer>
  );
}

const TargetContainer = styled.button`
  max-width: 233px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const IconContainer = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 24px;
  background-color: ${({ selected }) => (selected ? '#4684e9' : '#e6f1ff')};
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  transition: all 0.2s;
`;

const Text = styled.p<{ selected: boolean }>`
  font-size: 20px;
  padding: 10px 0 6px 0;
  color: ${({ selected }) => (selected ? '#4684e9' : '#666666')};
  font-weight: ${({ selected }) => (selected ? '700' : '400')};
`;
