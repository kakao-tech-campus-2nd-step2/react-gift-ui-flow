import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
