import type { ReactElement } from 'react';
import type { ElementType } from 'react';

import { FlatFlex } from '@/components/atoms/FlatFlex';
import type { StaticItemProp } from '@/components/molecules/types/StaticItemProp';

type FlexItemsBoxProp<T extends StaticItemProp> = {
  flexItems: T[];
  FlexItemComponent: ElementType;
  className?: string;
};

export const FlexItemsBox = <T extends StaticItemProp>({
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
