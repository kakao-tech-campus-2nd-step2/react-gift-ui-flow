import Layout from 'Layout/Layout';
import ThemeCategorySection from '@components/MainPage/CategorySection';
import FriendSelection from '@components/MainPage/FriendSelection';
import AIRecommend from '@components/MainPage/AIRecommend';
import GiftRanking from '@components/MainPage/GiftRanking';

const Main = () => {
  return (
    <Layout>
      <FriendSelection />
      <ThemeCategorySection />
      <AIRecommend />
      <GiftRanking />
    </Layout>
  );
};

export default Main;
