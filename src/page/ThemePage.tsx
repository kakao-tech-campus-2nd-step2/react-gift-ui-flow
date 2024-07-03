import { Banner } from '@/components/common/Banner/Banner';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import GoodsList from '@/components/ThemeComponents/GoodsList';

const ThemePage = () => {
  return (
    <>
      <Header />
      <Banner
        label="가벼운 선물"
        title="예산은 가볍게, 감동은 무겁게❤️"
        description="당신의 센스를 뽐내줄 부담 없는 선물"
        backgroundColor="#4b4d50"
      />
      <GoodsList />
      <Footer />
    </>
  );
};

export default ThemePage;
