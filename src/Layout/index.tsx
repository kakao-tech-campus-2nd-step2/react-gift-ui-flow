// import { Home } from '@/Pages/Home';
// export const Layout = ()=> {
//   return(
//     <>
//     <Header/>
//     <Home/>
//     <Footer/>
//     </>
//   );
// };
// export default Layout;
// import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/Layout/Footer';
import Header from '@/Layout/Header';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
