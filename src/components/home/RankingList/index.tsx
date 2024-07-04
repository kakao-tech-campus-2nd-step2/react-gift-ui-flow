import React, { useState } from 'react';
import rankingList from '@data/rankingList';
import styled from '@emotion/styled';
import GoodsItem from '@components/common/GoodsItem/GoodItem';
import Grid from '@components/common/Layout/Grid/Grid';
import Button from '@/components/common/Button/Button';

const INITIAL_DISPLAY_COUNT = 6;

export default function RankingList() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const displayedItems = showAll ? rankingList : rankingList.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <RankingListContainer>
      <Grid gap={14} columns={6}>
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
