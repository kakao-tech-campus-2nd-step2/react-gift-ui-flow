import React from 'react';
import {
  GoodsItemContainer,
  Image,
  Text,
  Amount,
  RankingBadge,
} from './GoodsItem.styles';

interface RankingGoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex: number;
}

const RankingGoodsItem: React.FC<RankingGoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}) => (
  <GoodsItemContainer>
    <RankingBadge rankingIndex={rankingIndex}>{rankingIndex}</RankingBadge>
    <Image src={imageSrc} alt={title} />
    <Text>{title}</Text>
    <Text>{subtitle}</Text>
    <Amount>{amount.toLocaleString()}원</Amount>
  </GoodsItemContainer>
);

export default RankingGoodsItem;
