import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import ChooseFriend from '@/components/common/ChooseFriend';
import ThemeList from '@/components/common/ThemeList';
export default function Mainpage() {
  return (
    <div>
      <Header></Header>
      <ChooseFriend></ChooseFriend>
      <ThemeList></ThemeList>
      <Footer></Footer>
    </div>
  );
}
