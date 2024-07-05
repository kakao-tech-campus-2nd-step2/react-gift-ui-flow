import { Footer } from '@/components/common/layouts/Footer';
import { Header } from '@/components/common/layouts/Header';
import { Login } from '@/pages/Login';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Login></Login>
      <Footer>카카오톡 선물하기</Footer>
    </div>
  );
};

export default App;
