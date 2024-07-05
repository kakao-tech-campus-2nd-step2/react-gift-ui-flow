import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#4285f4' : '#e6effe')};
  color: #FFF;
  text-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 20px;
  cursor: pointer;
  font-size: 20px;
  width: 25px;
  text-align: center;
  transition: background-color 0.3s;

  &:focus {
    outline: none;
  }
`;

const Text = styled.span<{ active: boolean }>`
  display: block;
  margin-top: 10px;
  font-size: 25px;
  color: ${(props) => (props.active ? '#4285f4' : '#000')};
  text-align: center;
  transition: color 0.3s;
`;

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  buttonText: string;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, buttonText, children }) => {
  return( 
    <div>
      <Button active={active} onClick={onClick}>{buttonText}</Button>
      <Text active={active}>{children}</Text>
    </div>
  );
};

export default FilterButton;
