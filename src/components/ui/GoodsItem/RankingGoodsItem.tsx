import { RankedImage } from '@/components/ui/Image/RankingImage';
import { Container } from '@/components/ui/Layout/Container';

import { GoodsItemDetail } from './GoodsItemDetail';
import { containerStyle } from './styles';

interface RankingGoodsItemProps {
  rank: number;
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
}

export const RankingGoodsItem = ({
  rank,
  imageSrc,
  subtitle,
  title,
  amount,
}: RankingGoodsItemProps) => {
  return (
    <Container
      maxWidth="8rem"
      flexDirection="column"
      alignItems="center"
      css={containerStyle}
    >
      <RankedImage rank={rank} imageSrc={imageSrc} alt={title} />
      <GoodsItemDetail subtitle={subtitle} title={title} amount={amount} />
    </Container>
  );
};
