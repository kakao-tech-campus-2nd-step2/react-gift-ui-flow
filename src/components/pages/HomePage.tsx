import './HomePage.css';

import GiftRanking from '../GiftRanking/GiftRanking';
import ThemeCategory from '../Theme/ThemeCategory';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <img
        className="home-img"
        src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
      />
      <p className="home-description">선물 받을 친구를 선택해주세요.</p>
      <div className="themeCategory">
        <ThemeCategory />
      </div>
      <GiftRanking />
    </div>
  );
};

export default HomePage;
