import { HTMLAttributes } from 'react';

import { Container } from '@/components/ui/Layout/Container';

import { containerStyle } from './styles';

interface LoginLayoutProp extends HTMLAttributes<HTMLDivElement> {}

const LoginLayout = ({ children, ...props }: LoginLayoutProp) => {
  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      css={containerStyle}
      {...props}
    >
      {children}
    </Container>
  );
};

export default LoginLayout;
