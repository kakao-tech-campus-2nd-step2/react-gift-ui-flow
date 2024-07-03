import React from 'react';
import styled from '@emotion/styled';
import Wish from './Wish';
import Target from './Target';

export default function Filter() {
  return (
    <FilterContainer>
      <TargetContainer>
        <Target />
      </TargetContainer>
      <Wish />
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
