import styled from '@emotion/styled';
import React from 'react';

type Props = {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
};

export const PersonButton = ({ selected, label, icon, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon selected={selected}>{icon}</Icon>
      <Label selected={selected}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 100%;
  min-width: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:focus {
  outline: none;
`;

const Icon = styled.div<Pick<Props, 'selected'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: ${({ selected }) => (selected ? '#4684e9' : '#e6f1ff')};
  border-radius: 20px;
  
  }
`;

const Label = styled.p<Pick<Props, 'selected'>>`
  padding-top: 5px;
  font-size: 20px;
  line-height: 16px;
  color: ${({ selected }) => (selected ? '#4684e9' : '#666')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  transition: color 200ms, font-weight 200ms;
`;

export default PersonButton;
