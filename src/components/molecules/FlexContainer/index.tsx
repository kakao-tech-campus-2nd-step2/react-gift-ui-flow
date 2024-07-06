import type { ReactElement } from 'react';

import { FlatFlex } from '@/components/atoms/FlatFlex';
import { IContainer } from '@/components/atoms/IContainer';
import type { ItemProps } from '@/components/atoms/IContainer/types';
import type { FlexContainerProps } from '@/components/atoms/IContainer/types';

export const FlexContainer = <T extends ItemProps>({
  items,
  component,
  className = '',
}: FlexContainerProps<T>): ReactElement => {
  return (
    <IContainer
      items={items}
      component={component}
      container={FlatFlex}
      otherProps={{ className }}
    />
  );
};
