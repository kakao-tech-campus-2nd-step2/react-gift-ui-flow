import ThemeCategorySection from '@components/MainPage/CategorySection';
import FriendSelection from '@components/MainPage/FriendSelection';
import AIRecommend from '@components/MainPage/AIRecommend';
import GiftRanking from '@components/MainPage/GiftRanking';

const Main = () => {
  return (
    <div>
      <FriendSelection />
      <ThemeCategorySection />
      <AIRecommend />
      <GiftRanking />
    </div>
  );
};

export default Main;
