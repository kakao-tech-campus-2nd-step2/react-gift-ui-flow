import type { ReactElement } from 'react';

import type { ItemProps, ItemsIteratorProps } from '@/components/atoms/ItemsIterator/types';

export const ItemsIterator = <T extends ItemProps>({
  items,
  component: Component,
  container: Container,
  otherProps = {},
}: ItemsIteratorProps<T>): ReactElement => {
  return (
    <Container {...otherProps}>
      {items.map(({ id, ...props }) => (
        <Component key={id} id={id} {...props} />
      ))}
    </Container>
  );
};
