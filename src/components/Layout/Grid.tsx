import React from 'react';
import { StyledGrid } from './Grid.styles';

interface GridProps {
  gap?: number;
  columns: number | { default: number; [key: string]: number };
  children: React.ReactNode;
}

const Grid = ({ gap, columns, children }: GridProps) => (
  <StyledGrid gap={gap} columns={columns}>
    {children}
  </StyledGrid>
);

export default Grid;
