import ThemeCategory from '../Theme/ThemeCategory';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <img src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png" />
      <p>선물 받을 친구를 선택해주세요.</p>
      <ThemeCategory />
    </div>
  );
};

export default HomePage;
