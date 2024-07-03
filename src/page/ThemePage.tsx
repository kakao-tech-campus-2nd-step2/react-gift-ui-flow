// export type DefaultHeaderProps = {
//   label: string;
//   title: string;
//   description: string;
//   backgroundColor: string;
// }

import { Banner } from '@/components/common/Banner/Banner';
import { Header } from '@/components/common/Header/Header';
import Footer from '@/components/Footer';
import GoodsList from '@/components/ThemeComponents/GoodsList';

const ThemePage = () => {
  return (
    <>
      <Header label="/login" title="선물하기" description="로그인" backgroundColor="#FFF" />
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
