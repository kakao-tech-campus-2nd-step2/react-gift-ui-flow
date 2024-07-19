import '@styles/home.css';

import RankGoodsItem from '@components/common/GoodsItem/RankGoodsItem';
import Grid from '@components/common/Layout/Grid';
import HomeHeader from '@components/Home/HomeHeader';
import RankingFilter from '@components/Home/RankingFilter';
import ThemeItem from '@components/Home/ThemeItem';
import GOODS_ITEMS from '@mocks/goodsItems';
import THEMES from '@mocks/theme';
import { useState } from 'react';

function Home() {
  const [more, setMore] = useState(false);

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
      <div className="home__ranking">
        <p className="home__ranking__title">실시간 급상승 선물랭킹</p>
        <RankingFilter />
        <Grid gap={10} columns={6} className="home__ranking__grid">
          {GOODS_ITEMS.map((goodsItem, index) => (
            <RankGoodsItem
              key={goodsItem.id}
              hidden={index >= 6 && !more}
              rankingIndex={index + 1}
              imageSrc={goodsItem.imageSrc}
              subTitle={goodsItem.subTitle}
              title={goodsItem.title}
              amount={goodsItem.amount}
            />
          ))}
        </Grid>
        <button type="button" className="home__ranking__more" onClick={() => setMore(!more)}>
          {more ? '접기' : '더보기'}
        </button>
      </div>
    </div>
  );
}

export default Home;
