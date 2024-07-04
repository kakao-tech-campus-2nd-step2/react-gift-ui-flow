import { useRankList } from '@/context/rankList/useRankList';

import { RankingGoodsItem } from '@/components/ui/GoodsItem/Ranking';
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
      placeItems="start"
    >
      {visibleItems.map((item) => (
        <RankingGoodsItem
          key={item.id}
          rank={item.rank}
          title={item.title}
          subtitle={item.subtitle}
          amount={item.amount}
        />
      ))}
    </Grid>
  );
};
