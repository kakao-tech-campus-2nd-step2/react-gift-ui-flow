import styled from '@emotion/styled';

interface GoodsItemProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  amount: number;
  rankingIndex?: number;
}

const GoodsItem = ({
  title,
  subtitle,
  imageSrc,
  amount,
  rankingIndex
}: GoodsItemProps) => {
  const rankingClass = rankingIndex !== undefined && rankingIndex >= 1 && rankingIndex <= 3? 'top-ranking' : 'default-ranking';

  return (
    <StyledGoodsItem>
      {rankingIndex !== undefined && (
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
    </StyledGoodsItem>
  );
};

const StyledGoodsItem = styled.div`
  border-radius: 8px;
  overflow: hidden;

  margin: px;
  padding: 10px;
  width: 185px;
  position: relative;


  .goods-item-ranking {
    background-color: orange;
    border-radius: 20%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 1;
    color: white;
    font-size: 13px;
    font-weight: bold;
  }

  & .top-ranking {
    background-color: pink;
  }

  & .default-ranking {
    background-color: gray;
  }

  .goods-item-image-container {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative;
    overflow: hidden;
  }

  .goods-item-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }  

  .goods-item-info {
    padding: 10px;
  }

  .goods-item-subtitle {
    color: #888;
    font-size: 0.9em;
    margin: 5px 0;
  }

  .goods-item-title {
    font-size: 0.9em;
    margin: 10px 0;
    font-weight: normal;
  }

  .goods-item-amount {
    color: black;
    font-size: 1em;
    font-weight: bold;
  }
`;

export default GoodsItem;