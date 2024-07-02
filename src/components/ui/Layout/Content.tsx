import { ReactNode } from 'react';

import { Container, ContainerProps } from './Container';
import { contentStyle } from './styles';

interface ContentProps extends ContainerProps {
  children: ReactNode;
  backgroundColor: string;
  height: string;
}

export const Content = ({
  children,
  backgroundColor,
  height,
  flexDirection,
  justifyContent,
  alignItems,
  ...rest
}: ContentProps) => {
  return (
    <div css={contentStyle(backgroundColor, height)} {...rest}>
      <Container
        maxWidth="1024px"
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {children}
      </Container>
    </div>
  );
};
