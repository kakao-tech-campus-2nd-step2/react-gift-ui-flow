import type { ReactElement } from 'react';
import type { ElementType } from 'react';

import { FlatFlex } from '@/components/atoms/FlatFlex';

type FlexItemsBoxProp<T> = {
  flexItems: T[];
  FlexItemComponent: ElementType;
  className?: string;
};

export const FlexItemsBox = <T,>({
  flexItems,
  FlexItemComponent,
  className,
}: FlexItemsBoxProp<T>): ReactElement => {
  return (
    <FlatFlex className={className}>
      {flexItems.map((props) => (
        <FlexItemComponent {...props} />
      ))}
    </FlatFlex>
  );
};
