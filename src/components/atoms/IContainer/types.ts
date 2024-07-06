import type { ElementType } from 'react';

export interface ItemProps {
  id: number | string;
}

export type IteratingItemProps<T extends ItemProps> = {
  items: T[];
  component: ElementType;
};

export type IteratingLayoutProps<T extends ItemProps> = IteratingItemProps<T> & {
  container: ElementType;
};

export type IContainerProps<T extends ItemProps> = IteratingLayoutProps<T> & {
  otherProps?: object;
};

// export type FlexContainerProps<T extends ItemProps> = Omit<IContainerProps<T>, 'container'>;
export type FlexContainerProps<T extends ItemProps> = IteratingItemProps<T> & {
  className?: string;
};

export type GridContainerProps<T extends ItemProps> = IteratingItemProps<T> & {
  columns: number | object;
  gap?: number;
  className?: string;
};
