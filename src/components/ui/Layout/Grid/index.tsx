import { HTMLAttributes, ReactNode } from 'react';

import { Column, PlaceItems } from '@/types/uiTypes';

import { gridStyle } from './styles';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  columns?: Column;
  placeItems?: PlaceItems;
  children: ReactNode;
}

export const Grid = ({
  gap = 10,
  columns = 3,
  placeItems = 'center',
  children,
  ...props
}: GridProps) => {
  return (
    <div css={gridStyle(gap, columns, placeItems)} {...props}>
      {children}
    </div>
  );
};
