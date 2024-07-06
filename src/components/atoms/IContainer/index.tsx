import type { ReactElement } from 'react';

import type { IContainerProps, ItemProps } from '@/components/atoms/IContainer/types';

export const IContainer = <T extends ItemProps>({
  items,
  component: Component,
  container: Container,
  otherProps = {},
}: IContainerProps<T>): ReactElement => {
  return (
    <Container {...otherProps}>
      {items.map(({ id, ...props }) => (
        <Component key={id} id={id} {...props} />
      ))}
    </Container>
  );
};
