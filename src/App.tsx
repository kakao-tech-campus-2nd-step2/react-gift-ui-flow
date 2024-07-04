import { Outlet } from 'react-router-dom';

import Footer from '@/pages/Footer';
import Header from '@/pages/Header';

interface AppProps {
  themeKey?: string;
}

const App = ({ themeKey = 'default' }: AppProps) => {
  return (
    <div>
      <Header themeKey={themeKey} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
