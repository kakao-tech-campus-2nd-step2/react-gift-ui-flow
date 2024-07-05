import '@styles/goodsItem.css';

import GoodsItem from './GoodsItem';

type DefaultGoodsItemProps = {
  imageSrc: string;
  subTitle: string;
  title: string;
  amount: number;
  hidden?: boolean;
};

function DefaultGoodsItem({ imageSrc, subTitle, title, amount, hidden }: DefaultGoodsItemProps) {
  return (
    <GoodsItem
      hidden={hidden}
      imageSrc={imageSrc}
      subTitle={subTitle}
      title={title}
      amount={amount}
    />
  );
}

DefaultGoodsItem.defaultProps = {
  hidden: false,
};

export default DefaultGoodsItem;
