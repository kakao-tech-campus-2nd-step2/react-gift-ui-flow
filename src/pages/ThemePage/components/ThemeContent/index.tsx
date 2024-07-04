import { ThemeListType } from '@/types/themeType';

import { Content } from '@/components/Content';
import { GoodsItem } from '@/components/ui/GoodsItem/Default';
import { Grid } from '@/components/ui/Layout/Grid';

import { contentStyle } from './styles';

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
        css={contentStyle}
      >
        {items.map((item) => (
          <GoodsItem
            key={item.id}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Grid>
    </Content>
  );
};
