import type { ReactElement } from 'react';

import type { IContainerProps, ItemProps } from '@/components/atoms/IContainer/types';

export const IContainer = <T extends ItemProps>({
  items,
  component: Component,
  className = '',
  container: Container,
  otherProps = {},
}: IContainerProps<T>): ReactElement => {
  return (
    <Container className={className} {...otherProps}>
      {items.map(({ id, ...props }) => (
        <Component key={id} id={id} {...props} />
      ))}
    </Container>
  );
};
