/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

import '@styles/goodsItem.css';

import GoodsItem from '@components/common/GoodsItem';

type DefaultGoodsItemProps = {
  imageSrc: string;
  subTitle: string;
  title: string;
  amount: number;
};

function DefaultGoodsItem({ imageSrc, subTitle, title, amount }: DefaultGoodsItemProps) {
  return <GoodsItem imageSrc={imageSrc} subTitle={subTitle} title={title} amount={amount} />;
}

export default DefaultGoodsItem;
