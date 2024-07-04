import styled from '@emotion/styled';
import React, { useState } from 'react';

import FilterButton from '../../common/FilterButton/FilterButton';
import FilterTabs from './FilterTabs';

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Filter: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: boolean }>({
    ALL: true,
    여성: false,
    남성: false,
    청소년: false,
  });
  const [tab, setTab] = useState<string>('받고 싶어한');

  const handleFilterChange = (newFilter: string) => {
    setActiveFilters({
      ALL: newFilter === 'ALL',
      여성: newFilter === '여성',
      남성: newFilter === '남성',
      청소년: newFilter === '청소년',
    });
  };

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
  };

  return (
    <div>
      <FilterWrapper>
        <FilterButton active={activeFilters.ALL} onClick={() => handleFilterChange('ALL')} buttonText='ALL'>전체</FilterButton>
        <FilterButton active={activeFilters.여성} onClick={() => handleFilterChange('여성')} buttonText='👩🏻‍🦳'>여성이</FilterButton>
        <FilterButton active={activeFilters.남성} onClick={() => handleFilterChange('남성')} buttonText='👨🏻‍🦳'>남성이</FilterButton>
        <FilterButton active={activeFilters.청소년} onClick={() => handleFilterChange('청소년')} buttonText='👦🏻'>청소년이</FilterButton>
      </FilterWrapper>
      <div>
        <FilterTabs activeTab={tab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
};

export default Filter;
