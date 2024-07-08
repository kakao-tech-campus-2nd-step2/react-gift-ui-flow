import type { ReactElement } from 'react';

import { FlatFlex } from '@/components/atoms/FlatFlex';
import { ItemsIterator } from '@/components/atoms/ItemsIterator';
import type { ItemProps } from '@/components/atoms/ItemsIterator/types';
import type { FlexContainerProps } from '@/components/atoms/ItemsIterator/types';

export const FlexContainer = <T extends ItemProps>({
  items,
  component,
  className = '',
}: FlexContainerProps<T>): ReactElement => {
  return (
    <ItemsIterator
      items={items}
      component={component}
      container={FlatFlex}
      otherProps={{ className }}
    />
  );
};
