import { FilterRankItemType } from '@/types/rankTypes';

import { RankingGoodsItem } from '@/components/ui/GoodsItem/Ranking';
import { Grid } from '@/components/ui/Layout/Grid';

import { itemContainerStyle } from './styles';

type RankListProps = {
  filteredList: FilterRankItemType[];
};

export const RankList = ({ filteredList }: RankListProps) => {
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
      {filteredList.map((item) => (
        <div key={item.id} css={itemContainerStyle}>
          <RankingGoodsItem
            rank={item.rank}
            title={item.title}
            subtitle={item.subtitle}
            amount={item.amount}
          />
        </div>
      ))}
    </Grid>
  );
};
