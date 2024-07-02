/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

import '@styles/goodsItem.css';

import GoodsItem from '@components/common/GoodsItem';

type RankGoodsItemProps = {
  rankingIndex: number;
  imageSrc: string;
  subTitle: string;
  title: string;
  amount: number;
};

function RankGoodsItem({ rankingIndex, imageSrc, subTitle, title, amount }: RankGoodsItemProps) {
  return (
    <GoodsItem
      imageSrc={imageSrc}
      subTitle={subTitle}
      title={title}
      amount={amount}
      rankingIndex={rankingIndex}
    />
  );
}

export default RankGoodsItem;
