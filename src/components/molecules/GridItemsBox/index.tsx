import type { ElementType } from 'react';

import { Grid } from '@/components/atoms/Grid';

type GridItemsBoxProp<T> = {
  columns: number | object;
  gap?: number;
  gridItems: T[];
  GridItemComponent: ElementType;
};

export const GridItemsBox = <T,>({
  columns,
  gap = 0,
  GridItemComponent,
  gridItems,
}: GridItemsBoxProp<T>) => {
  return (
    <Grid columns={columns} gap={gap}>
      {gridItems.map((props) => (
        <GridItemComponent {...props} />
      ))}
    </Grid>
  );
};
