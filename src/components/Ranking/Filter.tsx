import styled from '@emotion/styled';
import React, { useState } from 'react';

import FilterButton from '../common/FilterButton/FilterButton';
import FilterTabs from './FilterTabs';

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

interface Item {
  id: number;
  category: string;
  title: string;
}

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

  const data: Item[] = [
    { id: 1, category: 'ALL', title: 'Item 1' },
    { id: 2, category: '남성', title: 'Item 2' },
    { id: 3, category: '청소년', title: 'Item 3' },
    { id: 4, category: '여성', title: 'Item 4' },
    // ...
  ];

  const filteredData = activeFilters.ALL ? data : data.filter(item => activeFilters[item.category]);

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
        {filteredData.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
