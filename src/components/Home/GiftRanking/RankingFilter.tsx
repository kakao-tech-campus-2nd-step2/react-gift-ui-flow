import styled from '@emotion/styled';

import type { IFilter } from '.';
import { FilterDetailList } from './FilterDetailList';
import { FilterList } from './FilterList';

import { Container } from '@/components/common/Layout/Container';

export const RankingFilter = ({ selectTarget, setSelectTarget, selectType, setSelectType }: IFilter) => {
  return (
    <FilterWrapper>
      <Container flexDirection="column" maxWidth="1024px">
        <FilterList selectTarget={selectTarget} setSelectTarget={setSelectTarget} />
        <FilterDetailList selectType={selectType} setSelectType={setSelectType} />
      </Container>
    </FilterWrapper>
  );
};
const FilterWrapper = styled.div`
  width: 100%;
`;
