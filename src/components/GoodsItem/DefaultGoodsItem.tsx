import React from 'react';
import {
  GoodsItemContainer,
  ItemInfo,
  SubTitle,
  Title,
  Amount,
} from '@components/GoodsItem/GoodsItem.styles';
import Image from '@components/Image/Image';

interface DefaultGoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const DefaultGoodsItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
}: DefaultGoodsItemProps) => (
  <GoodsItemContainer>
    <ItemInfo>
      <Image ratio="square" radius={4} src={imageSrc} alt={title} />
      <SubTitle>{subtitle}</SubTitle>
      <Title>{title}</Title>
      <Amount>{amount.toLocaleString()}원</Amount>
    </ItemInfo>
  </GoodsItemContainer>
);

export default DefaultGoodsItem;
