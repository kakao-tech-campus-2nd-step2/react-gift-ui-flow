import styled from '@emotion/styled';

export const GoodsItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Text = styled.div`
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

export const Amount = styled.div`
  margin-top: 8px;
  font-weight: bold;
  font-size: 18px;
  color: #000;
`;

export const RankingBadge = styled.div<{ rankingIndex: number }>`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ rankingIndex }) => (rankingIndex <= 3 ? 'pink' : 'gray')};
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
