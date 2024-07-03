import { HTMLAttributes, ReactNode } from 'react';

import { Container } from '@/components/ui/Layout/Container';

import { Footer } from './Footer';
import { Header } from './Header';
import { layoutStyles, mainStyles } from './styles';

interface BaseLayoutProp extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const BaseLayout = ({ children, ...props }: BaseLayoutProp) => {
  return (
    <Container flexDirection="column" css={layoutStyles} {...props}>
      <Header />
      <div css={mainStyles}>{children}</div>
      <Footer />
    </Container>
  );
};

export default BaseLayout;
