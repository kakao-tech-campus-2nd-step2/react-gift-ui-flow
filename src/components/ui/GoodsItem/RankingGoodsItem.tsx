import { FilterRankItemType } from '@/types/rankTypes';

import { RankedImage } from '@/components/ui/Image/RankingImage';
import { Container } from '@/components/ui/Layout/Container';

import { GoodsItemDetail } from './GoodsItemDetail';
import { containerStyle } from './styles';

interface RankingGoodsItemProps {
  imageSrc: string;
  rankingItem: FilterRankItemType;
}

export const RankingGoodsItem = ({
  imageSrc,
  rankingItem,
}: RankingGoodsItemProps) => {
  return (
    <Container maxWidth="100%" flexDirection="column" css={containerStyle}>
      <RankedImage
        rank={rankingItem.rank}
        imageSrc={imageSrc}
        alt={rankingItem.title}
      />
      <GoodsItemDetail
        subtitle={rankingItem.subtitle}
        title={rankingItem.title}
        amount={rankingItem.price}
      />
    </Container>
  );
};
