import '@styles/goodsItem.css';

export interface GoodsItemProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  amount: number;
  isRanking?: boolean;
  ranking?: number;
}

export const GoodsItem = ({ title, subtitle, imageSrc, amount, isRanking = false, ranking }: GoodsItemProps) => {
  return (
    <div className="goods-item">
      {isRanking && ranking !== undefined && (
        <div className={`goods-item-ranking ${ranking <= 3 ? 'top-ranking' : 'default-ranking'}`}>
          {ranking}
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