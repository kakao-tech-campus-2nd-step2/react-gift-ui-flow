import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const App = () => {
  return (
    <div>
      <Header themeKey="default" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
