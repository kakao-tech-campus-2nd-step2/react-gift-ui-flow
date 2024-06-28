import '@styles/goodsItem.css';

export interface GoodsItemProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  amount: number;
  isRanking?: boolean;
  rankingIndex?: number;
}

export const GoodsItem = ({ title, subtitle, imageSrc, amount, isRanking = false, rankingIndex }: GoodsItemProps) => {
    const rankingClass = rankingIndex !== undefined && rankingIndex <= 3 ? 'top-ranking' : 'default-ranking';
  return (
    <div className="goods-item">
      {isRanking && rankingIndex !== undefined && (
        <div className={`goods-item-ranking ${rankingClass}`}>
          {rankingIndex}
        </div>
      )}
      <div className="goods-item-image-container">
        <img src={imageSrc} alt={title} className="goods-item-image" />
      </div>
      <div className="goods-item-info">
        {subtitle && <p className="goods-item-subtitle">{subtitle}</p>}
        <h3 className="goods-item-title">{title}</h3>
        <p className="goods-item-amount">{amount} 원</p>
      </div>
    </div>
  );
};