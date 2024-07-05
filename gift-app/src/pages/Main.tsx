import Layout from 'Layout/Layout';
import ThemeCategorySection from '@components/ThemeSection/CategorySection';
import FriendSelection from '@components/ThemeSection/FriendSelection';
import AIRecommend from '@components/ThemeSection/AIRecommend';
import GiftRanking from '@components/ThemeSection/GiftRanking';

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
