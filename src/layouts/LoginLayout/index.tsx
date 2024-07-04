import { HTMLAttributes } from 'react';

import { loginContainerStyle } from '@/components/LoginPage/styles';
import { Container } from '@/components/ui/Layout/Container';

interface LoginLayoutProp extends HTMLAttributes<HTMLDivElement> {}

export const LoginLayout = ({ children, ...props }: LoginLayoutProp) => {
  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      css={loginContainerStyle}
      {...props}
    >
      {children}
    </Container>
  );
};
