import Layout from '@components/Layout/Layout';
import ThemeCategorySection from '@components/ThemeSection/CategorySection';
import FriendSelection from '@components/ThemeSection/FriendSelection';

const Main = () => {
  return (
    <Layout>
      <FriendSelection />
      <ThemeCategorySection />
    </Layout>
  );
};

export default Main;
