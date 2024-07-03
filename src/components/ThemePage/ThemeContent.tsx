import { DEFAULT_IMAGE_URL } from '@/constants/data';
import { ThemeListType } from '@/types/themeType';

import { GoodsItem } from '../ui/GoodsItem/GoodsItem';
import { Content } from '../ui/Layout/Content';
import { Grid } from '../ui/Layout/Grid';
import { themeContentStyle } from './styles';

type ThemeContentProps = {
  items: ThemeListType[];
};

export const ThemeContent = ({ items }: ThemeContentProps) => {
  return (
    <Content>
      <Grid
        gap={16}
        columns={{
          initial: 2,
          lg: 4,
          md: 2,
          sm: 2,
        }}
        css={themeContentStyle}
      >
        {items.map((item) => (
          <GoodsItem
            imageSrc={DEFAULT_IMAGE_URL}
            title={item.title}
            subtitle={item.subtitle}
            amount={item.amount}
          />
        ))}
      </Grid>
    </Content>
  );
};
