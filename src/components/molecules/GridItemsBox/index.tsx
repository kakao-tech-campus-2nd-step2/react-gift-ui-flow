import type { ElementType } from 'react';

import { Grid } from '@/components/atoms/Grid';
import type { IteratingItemProp } from '@/components/molecules/types/IteratingItemProp';

type GridItemsBoxProp<T extends IteratingItemProp> = {
  columns: number | object;
  gap?: number;
  gridItems: T[];
  GridItemComponent: ElementType;
};

export const GridItemsBox = <T extends IteratingItemProp>({
  columns,
  gap = 0,
  GridItemComponent,
  gridItems,
}: GridItemsBoxProp<T>) => {
  return (
    <Grid columns={columns} gap={gap}>
      {gridItems.map(({ id, ...props }) => (
        <GridItemComponent key={id} id={id} {...props} />
      ))}
    </Grid>
  );
};
