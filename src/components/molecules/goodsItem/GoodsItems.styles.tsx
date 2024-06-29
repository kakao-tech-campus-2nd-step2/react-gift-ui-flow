import styled from '@emotion/styled';

export const GoodsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  gap: 6px;
  position: relative;
`;

export const RankingBadge = styled.div`
  background-color: #ff8d8d;
  color: #ffffff;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  z-index: 1;
  border-radius: 5px;
  text-align: center;

  p {
    position: absolute;
    margin: auto;
    top: 1px;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const Subtitle = styled.p`
  color: #999999;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Title = styled.p`
  color: #333333;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Amount = styled.p`
  color: #222222;
  font-size: 20px;
  font-weight: bold;
  word-wrap: break-word;
`;
