import React from 'react';
import styled from '@emotion/styled';
import { CenteredContainer } from '@components/common/';
import { RankingList, Filter } from '@components/features/Home';

export default function TrendingGifts() {
  return (
    <TrendingGiftsSection>
      <CenteredContainer maxWidth="md">
        <Title>실시간 급상승 선물랭킹</Title>
        <Filter />
        <RankingList />
      </CenteredContainer>
    </TrendingGiftsSection>
  );
}

const TrendingGiftsSection = styled.section`
  padding-top: 120px;
  padding-bottom: 80px;
`;

const Title = styled.h2`
  font-size: 35px;
  text-align: center;
`;
