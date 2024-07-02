import { HTMLAttributes, ReactNode } from 'react';

import { Column } from '@/types/uiTypes';

import { gridStyle } from './styles';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  columns?: Column;
  children: ReactNode;
}

export const Grid = ({
  gap = 10,
  columns = 3,
  children,
  ...props
}: GridProps) => {
  return (
    <div css={gridStyle(gap, columns)} {...props}>
      {children}
    </div>
  );
};
