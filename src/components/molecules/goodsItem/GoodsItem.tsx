import Image from '@components/atoms/image/Image';
import {
  Amount, GoodsItemWrapper, RankingBadge, Subtitle, Title,
} from './GoodsItems.styles';
import { GoodsItemProps } from '@/types';

function GoodsItem({
  rankingIndex, imageSrc, subtitle, title, amount,
}: GoodsItemProps) {
  return (
    <GoodsItemWrapper>
      {rankingIndex ? (
        <RankingBadge rankingIndex={rankingIndex}>
          <p>{rankingIndex}</p>
        </RankingBadge>
      ) : null}
      <Image ratio="square" radius={3} src={imageSrc} />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Amount>
        {amount}
        원
      </Amount>
    </GoodsItemWrapper>
  );
}

export default GoodsItem;
