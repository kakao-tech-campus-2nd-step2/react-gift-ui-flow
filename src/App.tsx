import { Outlet, useParams } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const App = () => {
  const { themeKey } = useParams<{ themeKey?: string }>();

  return (
    <div>
      <Header themeKey={themeKey} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
