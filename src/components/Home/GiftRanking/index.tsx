import styled from '@emotion/styled';
import { useState } from 'react';

import { Filter } from './Filter';
import { FilteredList } from './FilteredList';

import { Container } from '@/components/common/Layout/Container';
import type { TARGET_FILTER_ITEMS, TYPE_FILTER_ITEMS } from '@/constant/Filter';

export type Target = (typeof TARGET_FILTER_ITEMS)[number]['text'];
export type Type = (typeof TYPE_FILTER_ITEMS)[number]['text'];

export interface IFilter {
  target: Target;
  type: Type;
}

export const GiftRanking = () => {
  const [filter, setFilter] = useState<IFilter>({ target: '전체', type: '받고 싶어한' });

  const changeFilter = ({ target, type }: Partial<IFilter>) => {
    setFilter((prev) => ({ target: target ?? prev.target, type: type ?? prev.type }));
  };

  return (
    <RankingWrapper>
      <Container flexDirection="column" justifyContent="center" maxWidth="1024px">
        <Title>실시간 급상승 선물랭킹</Title>
        <Filter filter={filter} changeFilter={changeFilter} />
        <FilteredList filter={filter} />
      </Container>
    </RankingWrapper>
  );
};

const RankingWrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: left;
  }
`;
