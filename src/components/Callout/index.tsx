import { Radius } from '@/types/uiTypes';

import { Container, ContainerProps } from '@/components/ui/Layout/Container';

import { calloutStyles } from './styles';

interface ButtonProps extends ContainerProps {
  theme?: 'kakao' | 'skyblue';
  radius?: Radius;
  isActive?: boolean;
}

export const Callout = ({
  children,
  theme = 'kakao',
  radius = 8,
  isActive = false,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  ...props
}: ButtonProps) => {
  return (
    <Container
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      css={calloutStyles(theme, radius, isActive)}
      {...props}
    >
      {children}
    </Container>
  );
};
