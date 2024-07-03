import type { ReactElement } from 'react';
import type { ElementType } from 'react';

import { FlatFlex } from '@/components/atoms/FlatFlex';

type FlexItemsBoxProp<T> = {
  flexItems: T[];
  FlexItemComponent: ElementType;
};

export const FlexItemsBox = <T,>({
  flexItems,
  FlexItemComponent,
}: FlexItemsBoxProp<T>): ReactElement => {
  return (
    <FlatFlex>
      {flexItems.map((props) => (
        <FlexItemComponent {...props} />
      ))}
    </FlatFlex>
  );
};
