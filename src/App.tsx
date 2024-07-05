import { Footer } from '@/components/common/layouts/Footer';
import { Header } from '@/components/common/layouts/Header';
import { MyAccount } from '@/pages/MyAccount';

const App = () => {
  return (
    <div>
      <Header></Header>
      <MyAccount name="kakao"></MyAccount>
      <Footer>카카오톡 선물하기</Footer>
    </div>
  );
};

export default App;
