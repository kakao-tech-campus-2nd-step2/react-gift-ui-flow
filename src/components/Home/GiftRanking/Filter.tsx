import styled from '@emotion/styled';

import type { IFilter, Target, Type } from '.';
import { TargetFilter } from './TargetFilter';
import { TypeFilter } from './TypeFilter';

import { Container } from '@/components/common/Layout/Container';

export interface IChangeFilter {
  filter: IFilter;
  changeFilter: ({ target, type }: Partial<IFilter>) => void;
}
export const Filter = ({ filter, changeFilter }: IChangeFilter) => {
  const onTargetChange = (target: Target) => {
    changeFilter({ target });
  };

  const onTypeChange = (type: Type) => {
    changeFilter({ type });
  };
  return (
    <FilterWrapper>
      <Container flexDirection="column" maxWidth="1024px">
        <TargetFilter targetValue={filter.target} onTargetChange={onTargetChange} />
        <TypeFilter typeValue={filter.type} onTypeChange={onTypeChange} />
      </Container>
    </FilterWrapper>
  );
};
const FilterWrapper = styled.div`
  width: 100%;
`;
