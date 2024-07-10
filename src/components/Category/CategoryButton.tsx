import styled from '@emotion/styled';
import React from 'react';

type CategoryButtonProps = {
  active: boolean;
  label: string;
  subLabel: string;
  onClick: () => void;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ active, label, subLabel, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} active={active}>
      <ButtonLabel>{label}</ButtonLabel>
      <ButtonSubLabel>{subLabel}</ButtonSubLabel>
    </ButtonWrapper>
  );
};

export default CategoryButton;

const ButtonWrapper = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? '#2d8cf0' : '#e6f7ff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border-radius: 20px;
  margin-right: 10px;
  &:hover {
    background-color: ${({ active }) => (active ? '#1a73e8' : '#cceeff')};
  }
`;

const ButtonLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ButtonSubLabel = styled.span`
  font-size: 12px;
`;
