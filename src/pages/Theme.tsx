import '@styles/theme.css';

import DefaultGoodsItem from '@components/common/GoodsItem/DefaultGoodsItem';
import Grid from '@components/common/Layout/Grid';
import ThemeHeader from '@components/Theme/ThemeHeader';
import GOODS_ITEMS from '@mocks/goodsItems';
import THEMES from '@mocks/theme';
import { useParams } from 'react-router-dom';

function Theme() {
  const themeKey = useParams<{ themeKey: string }>().themeKey;

  return (
    <div className="theme">
      <ThemeHeader theme={THEMES.find((theme) => theme.key === themeKey)} />
      <Grid gap={10} columns={6} className="theme__goods__grid">
        {GOODS_ITEMS.map((goodsItem) => (
          <DefaultGoodsItem
            key={goodsItem.id}
            imageSrc={goodsItem.imageSrc}
            subTitle={goodsItem.subTitle}
            title={goodsItem.title}
            amount={goodsItem.amount}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Theme;
