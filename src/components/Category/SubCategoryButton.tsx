import styled from '@emotion/styled';
import React from 'react';

type SubCategoryButtonProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

const SubCategoryButton: React.FC<SubCategoryButtonProps> = ({ active, label, onClick }) => {
  return (
    <SubButton onClick={onClick} active={active}>
      {label}
    </SubButton>
  );
};

export default SubCategoryButton;

const SubButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  background-color: transparent;
  color: ${({ active }) => (active ? '#2d8cf0' : '#666')};
  border: none;
  cursor: pointer;
  margin-right: 20px;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #2d8cf0;
  }
`;
