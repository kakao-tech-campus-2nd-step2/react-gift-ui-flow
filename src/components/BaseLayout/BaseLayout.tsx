import { ReactNode } from 'react';

import { Container } from '@/components/ui/Layout/Container';
import { Content } from '@/components/ui/Layout/Content';

import { Footer } from './Footer';
import { Header } from './Header';
import { layoutStyles, mainStyles } from './styles';

type BaseLayoutProp = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProp) => {
  return (
    <Container flexDirection="column" css={layoutStyles}>
      <Header />
      <Content height="100%" backgroundColor="white" css={mainStyles}>
        {children}
      </Content>
      <Footer />
    </Container>
  );
};

export default BaseLayout;
