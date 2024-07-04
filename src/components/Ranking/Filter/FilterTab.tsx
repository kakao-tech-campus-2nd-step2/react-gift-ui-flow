import styled from '@emotion/styled';
import React from 'react';

const Tab = styled.div<{ active: boolean }>`
  color: ${(props) => (props.active ? '#4285f4' : '#7fa1e7')};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
  width: 95%;
`;

interface FilterTabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterTab: React.FC<FilterTabProps> = ({ active, onClick, children }) => {
  return <Tab active={active} onClick={onClick}>{children}</Tab>;
};

export default FilterTab;
