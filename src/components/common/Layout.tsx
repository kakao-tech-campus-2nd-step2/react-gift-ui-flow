import styled from '@emotion/styled';

import Footer from './Footer';
import Header from './Header';

const PaddingTop = styled.div`
  padding-top: 54px;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <PaddingTop>{children}</PaddingTop>
      <Footer />
    </div>
  );
};

export default Layout;
