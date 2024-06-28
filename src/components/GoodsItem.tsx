import styled from '@emotion/styled';

export interface IGoodsItem {
  imageSrc?: string;
  subtitle?: string;
  title?: string;
  amount?: number;
  rankingIndex?: number;
}

export const GoodsItem = ({ imageSrc, subtitle, title, amount, rankingIndex }: IGoodsItem) => {
  return (
    <GoodsItemWrapper>
      <img src={imageSrc} alt="goodsItem">
        {rankingIndex ? <RankingNumber rankingIndex={rankingIndex}>{rankingIndex}</RankingNumber> : null}
      </img>
      <p className="subtitle">{subtitle}</p>
      <p>{title}</p>
      <h1>{amount}원</h1>
    </GoodsItemWrapper>
  );
};

const GoodsItemWrapper = styled.div`
  width: 60px;
  .subtitle {
    color: gray;
  }
  .img {
    position: relative;
    object-fit: cover;
    aspect-ratio: auto 1 / 1;
  }
`;
const RankingNumber = styled.div<IGoodsItem>`
  position: absolute;
  left: 4px;
  top: 4px;
  background-color: ${(props) => (props.rankingIndex && props.rankingIndex > 3 ? 'gray' : '#c93e17')};
  border-radius: 2px;
  color: white;
`;
