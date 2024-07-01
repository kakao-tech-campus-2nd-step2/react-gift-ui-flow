import { ReactNode } from 'react';

import { Column } from '@/types/uiTypes';

import { gridStyle } from './styles';

type GridProps = {
  gap?: number;
  columns?: Column;
  children: ReactNode;
};

export const Grid = ({ gap = 10, columns = 3, children }: GridProps) => {
  return <div css={gridStyle(gap, columns)}>{children}</div>;
};
