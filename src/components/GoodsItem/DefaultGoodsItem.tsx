import React from 'react';
import { GoodsItemContainer, Image, Text, Amount } from './GoodsItem.styles';

interface DefaultGoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const DefaultGoodsItem: React.FC<DefaultGoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
}) => (
  <GoodsItemContainer>
    <Image src={imageSrc} alt={title} />
    <Text>{title}</Text>
    <Text>{subtitle}</Text>
    <Amount>{amount.toLocaleString()}원</Amount>
  </GoodsItemContainer>
);

export default DefaultGoodsItem;
