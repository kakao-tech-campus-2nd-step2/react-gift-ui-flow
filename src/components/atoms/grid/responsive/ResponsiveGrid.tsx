import { ReactNode } from 'react';
import {
  BreakpointGrid,
} from '@components/atoms/grid/responsive/ResponsiveGrid.styles';

interface ResponsiveGridProps {
  columnsXS?: number,
  columnsSm?: number,
  columnsMd?: number,
  columnsLg?: number,
  columnsDefault: number,
  gap?: number,
  children?: ReactNode;
}

function ResponsiveGrid({
  columnsXS,
  columnsSm,
  columnsMd,
  columnsLg,
  columnsDefault,
  gap,
  children,
}: ResponsiveGridProps) {
  return (
    <BreakpointGrid
      columnsXS={columnsXS}
      columnsSm={columnsSm}
      columnsMd={columnsMd}
      columnsLg={columnsLg}
      columnsDefault={columnsDefault}
      gap={gap}
    >
      {children}
    </BreakpointGrid>
  );
}

export default ResponsiveGrid;
