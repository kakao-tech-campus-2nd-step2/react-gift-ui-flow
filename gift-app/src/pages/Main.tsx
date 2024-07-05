import Layout from '@components/Layout/Layout';
import ThemeCategorySection from '@components/ThemeSection/CategorySection';
import FriendSelection from '@components/ThemeSection/FriendSelection';
import AIRecommend from '@components/ThemeSection/AIRecommend';

const Main = () => {
  return (
    <Layout>
      <FriendSelection />
      <ThemeCategorySection />
      <AIRecommend />
    </Layout>
  );
};

export default Main;
