import type { ReactElement } from 'react';
import type { ElementType } from 'react';

import { FlatFlex } from '@/components/atoms/FlatFlex';
import type { IteratingItemProp } from '@/components/molecules/types/IteratingItemProp';

type FlexItemsBoxProp<T extends IteratingItemProp> = {
  flexItems: T[];
  FlexItemComponent: ElementType;
  className?: string;
};

export const FlexItemsBox = <T extends IteratingItemProp>({
  flexItems,
  FlexItemComponent,
  className,
}: FlexItemsBoxProp<T>): ReactElement => {
  return (
    <FlatFlex className={className}>
      {flexItems.map(({ id, ...props }) => (
        <FlexItemComponent key={id} {...props} id={id} />
      ))}
    </FlatFlex>
  );
};
