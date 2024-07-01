import React from 'react';
import { StyledGrid } from './Grid.styles';

interface GridProps {
  gap?: number;
  columns: number | { default: number; [key: string]: number };
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ gap, columns, children }) => (
  <StyledGrid gap={gap} columns={columns}>
    {children}
  </StyledGrid>
);

export default Grid;
