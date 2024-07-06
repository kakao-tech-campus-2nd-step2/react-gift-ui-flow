import type { ReactElement } from 'react';

import { Grid } from '@/components/atoms/Grid';
import { IContainer } from '@/components/atoms/IContainer';
import type { GridContainerProps, ItemProps } from '@/components/atoms/IContainer/types';

export const GridContainer = <T extends ItemProps>({
  items,
  component,
  columns,
  gap = 0,
  className = '',
}: GridContainerProps<T>): ReactElement => {
  return (
    <IContainer
      items={items}
      component={component}
      container={Grid}
      className={className}
      otherProps={{ columns, gap }}
    />
  );
};
