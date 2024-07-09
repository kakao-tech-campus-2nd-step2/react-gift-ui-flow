import React from 'react';
import rankingList from '@mocks/rankingList';
import styled from '@emotion/styled';
import { GoodsItem, Grid, Button } from '@components/common';
import useToggle from '@hooks/useToggle';

const INITIAL_DISPLAY_COUNT = 6;
const GRID_GAP = 14;
const GRID_COLUMNS = 6;

export default function RankingList() {
  const [showAll, toggleShowAll] = useToggle(false);

  const displayedItems = showAll ? rankingList : rankingList.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <RankingListContainer>
      <Grid gap={GRID_GAP} columns={GRID_COLUMNS}>
        {displayedItems.map(({ id, imageSrc, subtitle, title, amount, rankingIndex, target, wish }) => (
          <GoodsItem key={id} {...{ imageSrc, subtitle, title, amount, rankingIndex, target, wish }} />
        ))}
      </Grid>
      <ButtonContainer>
        <Button size="large" theme="primary" onClick={toggleShowAll}>
          {showAll ? '접기' : '더보기'}
        </Button>
      </ButtonContainer>
    </RankingListContainer>
  );
}

const RankingListContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 60px;
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
  width: 480px;
  margin: 0 auto;
`;
