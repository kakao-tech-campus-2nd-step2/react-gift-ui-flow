import styled from '@emotion/styled';

export const GoodsItemContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 157px;
`;

export const RankingBadge = styled.span<{ rankingIndex: number }>`
  position: absolute;
  z-index: 2;
  top: 16px;
  left: 4px;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: ${({ rankingIndex }) => (rankingIndex <= 3 ? 'rgb(253, 115, 100)' : 'rgb(187, 187, 187)')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemInfo = styled.div`
  width: 100%;
  padding-top: 12px;
`;

export const SubTitle = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: rgb(153, 153, 153);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  color: rgb(51, 51, 51);
  overflow: hidden;
`;

export const Amount = styled.p`
  padding-top: 8px;
  font-size: 20px;
  font-weight: 700;
`;
