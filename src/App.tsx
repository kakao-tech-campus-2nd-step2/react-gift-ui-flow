import { Footer } from '@/components/common/layouts/Footer';
import { Header } from '@/components/common/layouts/Header';
import { Home } from '@/pages/Home';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Home />
      <Footer>카카오톡 선물하기</Footer>
    </div>
  );
};

export default App;
