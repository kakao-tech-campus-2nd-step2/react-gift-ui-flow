import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { Margin0Auto } from '@/components/atoms/Margin0Auto';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

export const HeaderFooterOutlet = () => {
  return (
    <Fragment>
      <Header />
      <Margin0Auto>
        <Outlet />
      </Margin0Auto>
      <Footer />
    </Fragment>
  );
};
