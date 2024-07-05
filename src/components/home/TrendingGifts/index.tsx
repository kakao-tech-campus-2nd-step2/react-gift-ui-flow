import React from 'react';
import styled from '@emotion/styled';
import { Inner } from '@components/common/';
import { RankingList, Filter } from '@components/home';
import { BREAK_POINTS } from '@assets/styles/variants';

export default function TrendingGifts() {
  return (
    <TrendingGiftsSection>
      <Inner maxWidth={BREAK_POINTS.md}>
        <Title>실시간 급상승 선물랭킹</Title>
        <Filter />
        <RankingList />
      </Inner>
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
