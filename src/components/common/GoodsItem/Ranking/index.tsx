import React from 'react';
import styled from '@emotion/styled';

const TOP_RANKING_THRESHOLD = 3;

interface RankingProps {
  rankingIndex: number;
}

export default function Ranking({ rankingIndex, ...rest }: RankingProps) {
  return (
    <Badge rankingIndex={rankingIndex} {...rest}>
      {rankingIndex}
    </Badge>
  );
}

const Badge = styled.div<{ rankingIndex: number }>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  top: 4px;
  left: 4px;
  color: rgb(255, 255, 255);
  background-color: ${({ rankingIndex }) =>
    rankingIndex <= TOP_RANKING_THRESHOLD ? 'rgb(253, 115, 100)' : 'rgb(187, 187, 187)'};
`;
