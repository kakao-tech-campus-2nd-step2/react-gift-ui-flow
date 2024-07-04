import styled from '@emotion/styled';

import { Image } from './Image';

export interface IGoodsItem {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex?: number;
}

export const GoodsItem = ({ imageSrc, subtitle, title, amount, rankingIndex }: IGoodsItem) => {
  return (
    <GoodsItemWrapper>
      {rankingIndex ? <RankingNumber rankingIndex={rankingIndex}>{rankingIndex}</RankingNumber> : null}
      <Image radius={3} ratio="square" src={imageSrc} width="100%" alt="goodsItem" />
      <GoodsDescription>
        <GoodsItemSubtitle>{subtitle}</GoodsItemSubtitle>
        <GoodsItemTitle>{title}</GoodsItemTitle>
        <GoodsItemAmout>
          {amount}
          <span>원</span>
        </GoodsItemAmout>
      </GoodsDescription>
    </GoodsItemWrapper>
  );
};

const GoodsItemWrapper = styled.div`
  width: 100%;
  position: relative;
`;
const GoodsDescription = styled.div`
  width: 100%;
  padding-top: 10px;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const GoodsItemSubtitle = styled.p`
  width: 100%;
  color: gray;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`;
const GoodsItemTitle = styled.h5`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
`;
const GoodsItemAmout = styled.p`
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  span {
    font-weight: 300;
  }
`;
const RankingNumber = styled.div<Pick<IGoodsItem, 'rankingIndex'>>`
  width: 30px;
  height: 30px;
  position: absolute;
  display: flex;
  left: 4px;
  top: 4px;
  background-color: ${(props) => (props.rankingIndex && props.rankingIndex > 3 ? '#BBBBBB' : '#FD7364')};
  border-radius: 6px;
  color: white;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
