import '@styles/home.css';

import Grid from '@components/common/Layout/Grid';
import HomeHeader from '@components/Home/HomeHeader';
import ThemeItem from '@components/Home/ThemeItem';
import THEMES from '@constants/theme';
// import ThemeItem from '@components/Home/ThemeItem';

function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <div className="home__theme__frame">
        <Grid className="home__theme" gap={25} columns={6}>
          {THEMES.map((theme) => (
            <ThemeItem key={theme.id} theme={theme} />
          ))}
        </Grid>
      </div>
      <div className="home__banner">
        <p className="home__banner__subtitle">AI가 추천하는 선물</p>
        <p className="home__banner__title">선물을 추천받고 싶은 친구를 선택해주세요.</p>
      </div>
    </div>
  );
}

export default Home;
