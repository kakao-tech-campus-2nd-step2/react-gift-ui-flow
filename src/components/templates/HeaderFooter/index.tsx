import type { ReactNode } from 'react';
import { Fragment } from 'react';

import { Margin0Auto } from '@/components/atoms/Margin0Auto';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

type HeaderFooterProp = {
  children?: ReactNode;
};

export const HeaderFooter = ({ children = [] }: HeaderFooterProp) => {
  return (
    <Fragment>
      <Header />
      <Margin0Auto>{children}</Margin0Auto>
      <Footer />
    </Fragment>
  );
};
