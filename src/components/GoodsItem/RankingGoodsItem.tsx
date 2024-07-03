import React from 'react';
import {
  GoodsItemContainer,
  RankingBadge,
  ItemInfo,
  SubTitle,
  Title,
  Amount,
} from '@components/GoodsItem/GoodsItem.styles';
import Image from '@components/Image/Image';

interface RankingGoodsItemProps {
  imageSrc: string;
  rankingIndex: number;
  subtitle: string;
  title: string;
  amount: number;
}

const RankingGoodsItem = ({
  imageSrc,
  rankingIndex,
  subtitle,
  title,
  amount,
}: RankingGoodsItemProps) => (
  <GoodsItemContainer>
    <RankingBadge rankingIndex={rankingIndex}>{rankingIndex}</RankingBadge>
    <ItemInfo>
      <Image
        ratio="square"
        radius={4}
        src={imageSrc}
        alt={title}
      />
      <SubTitle>{title}</SubTitle>
      <Title>{subtitle}</Title>
      <Amount>{amount.toLocaleString()}원</Amount>
    </ItemInfo>
  </GoodsItemContainer>
);

export default RankingGoodsItem;
