import type { ElementType } from 'react';

import { Grid } from '@/components/atoms/Grid';
import type { StaticItemProp } from '@/components/molecules/types/StaticItemProp';

type GridItemsBoxProp<T extends StaticItemProp> = {
  columns: number | object;
  gap?: number;
  gridItems: T[];
  GridItemComponent: ElementType;
};

export const GridItemsBox = <T extends StaticItemProp>({
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
