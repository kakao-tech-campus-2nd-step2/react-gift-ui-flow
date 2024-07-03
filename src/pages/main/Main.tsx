import Banner from './components/Banner';
import RankingSection from './components/RankingSection';
import SelectFriend from './components/SelectFriend';
import ThemeSection from './components/ThemeSection';

const Main = () => {
  return (
    <div>
      <Banner />
      <ThemeSection />
      <SelectFriend />
      <RankingSection />
    </div>
  );
};

export default Main;
