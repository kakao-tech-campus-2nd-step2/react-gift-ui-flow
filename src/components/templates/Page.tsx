import { ReactNode } from 'react';
import PageHeader from '@components/organisms/semantic/header/PageHeader';
import PageFooter from '@components/organisms/semantic/footer/PageFooter';
import Container from '@components/atoms/container/Container';
import { HEADER_HEIGHT } from '@styles/size';

interface PageProps {
  children?: ReactNode;
  isLoggedIn?: boolean;
}

function Page({ children, isLoggedIn }: PageProps) {
  return (
    <>
      <PageHeader displayLogo isLoggedIn={isLoggedIn} />
      <Container cssProps={{ marginTop: HEADER_HEIGHT }} flexDirection="column" alignItems="center">
        {children}
      </Container>
      <PageFooter />
    </>
  );
}

export default Page;
