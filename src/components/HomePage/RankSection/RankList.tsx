import { useRankList } from '@/context/rankList/useRankList';

import { DEFAULT_IMAGE_URL } from '@/constants/data';

import { RankingGoodsItem } from '@/components/ui/GoodsItem/RankingGoodsItem';
import { Grid } from '@/components/ui/Layout/Grid';

export const RankList = () => {
  const { visibleItems } = useRankList();

  return (
    <Grid
      columns={{
        initial: 3,
        lg: 6,
        md: 4,
        sm: 3,
      }}
    >
      {visibleItems.map((item) => (
        <RankingGoodsItem
          key={item.id}
          imageSrc={DEFAULT_IMAGE_URL}
          rankingItem={item}
        />
      ))}
    </Grid>
  );
};
