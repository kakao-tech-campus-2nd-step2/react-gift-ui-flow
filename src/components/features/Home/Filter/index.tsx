import React from 'react';
import styled from '@emotion/styled';
import useFilter from '@hooks/useFilter';
import Wish from './Wish';
import Target from './Target';
import { FILTER_TARGETS, FILTER_WISHS } from './constants';

export default function Filter() {
  const { selectedTarget, selectedWish, selectTarget, selectWish } = useFilter(
    FILTER_TARGETS[0].name,
    FILTER_WISHS[0].wish,
  );

  return (
    <FilterContainer>
      <TargetContainer>
        <Target selectedTarget={selectedTarget} selectTarget={selectTarget} />
      </TargetContainer>
      <Wish selectedWish={selectedWish} selectWish={selectWish} />
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 7px;
`;

const TargetContainer = styled.div`
  margin-bottom: 20px;
`;
