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
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 10px;
  padding: 10px;
  width: 200px;


  .goods-item-ranking { //부모 요소의 클래스 이름과 무관하게 독립적으로 사용될 스타일
    background-color: orange;
    border-radius: 20%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    top: 42px;
    left: 42px;
    z-index: 1;
    color: white;
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
    object-fit: cover; /* This makes the image cover the container while preserving aspect ratio */
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
    font-size: 1.2em;
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