import type { ReactElement } from 'react';

import { Grid } from '@/components/atoms/Grid';
import { ItemsIterator } from '@/components/atoms/ItemsIterator';
import type { GridContainerProps, ItemProps } from '@/components/atoms/ItemsIterator/types';

export const GridContainer = <T extends ItemProps>({
  items,
  component,
  columns,
  gap = 0,
  className = '',
}: GridContainerProps<T>): ReactElement => {
  return (
    <ItemsIterator
      items={items}
      component={component}
      container={Grid}
      otherProps={{ className, columns, gap }}
    />
  );
};
