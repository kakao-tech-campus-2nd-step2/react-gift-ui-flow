import '@styles/goodsItem.css';

import GoodsItem from './GoodsItem';

type RankGoodsItemProps = {
  rankingIndex: number;
  imageSrc: string;
  subTitle: string;
  title: string;
  amount: number;
  hidden?: boolean;
};

function RankGoodsItem({
  rankingIndex,
  imageSrc,
  subTitle,
  title,
  amount,
  hidden = false,
}: RankGoodsItemProps) {
  return (
    <GoodsItem
      hidden={hidden}
      imageSrc={imageSrc}
      subTitle={subTitle}
      title={title}
      amount={amount}
      rankingIndex={rankingIndex}
    />
  );
}

export default RankGoodsItem;
