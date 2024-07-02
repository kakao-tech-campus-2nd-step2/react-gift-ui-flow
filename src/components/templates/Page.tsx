import { ReactNode } from 'react';
import PageHeader from '@components/organisms/semantic/header/PageHeader';
import PageFooter from '@components/organisms/semantic/footer/PageFooter';
import Container from '@components/atoms/container/Container';
import { HEADER_HEIGHT } from '@styles/size';

interface PageProps {
  children?: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <>
      <PageHeader displayLogo />
      <Container cssProps={{ marginTop: HEADER_HEIGHT }} flexDirection="column" alignItems="center">
        {children}
      </Container>
      <PageFooter />
    </>
  );
}

export default Page;
