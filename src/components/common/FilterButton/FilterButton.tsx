import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#4285f4' : '#f0f0f0')};
  color: ${(props) => (props.active ? '#ffffff' : '#000000')};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, children }) => {
  return <Button active={active} onClick={onClick}>{children}</Button>;
};

export default FilterButton;
