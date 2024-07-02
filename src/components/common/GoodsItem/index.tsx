/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

import '@styles/goodsItem.css';

type GoodsItemProps = {
  imageSrc: string;
  subTitle: string;
  title: string;
  amount: number;
  rankingIndex?: number;
};

function GoodsItem({ imageSrc, subTitle, title, amount, rankingIndex }: GoodsItemProps) {
  return (
    <div className="goodsItem">
      {typeof rankingIndex === 'number' && (
        <span className="goodsItem__ranking">{rankingIndex}</span>
      )}
      <img className="goodsItem__img" src={imageSrc} alt={title} />
      <div className="goodsItem__subtitle">{subTitle}</div>
      <div className="goodsItem__title">{title}</div>
      <div className="goodsItem__amount">{amount}원</div>
    </div>
  );
}

export default GoodsItem;
