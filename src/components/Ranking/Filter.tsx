import styled from '@emotion/styled';
import React, { useState } from 'react';

import FilterButton from '../common/FilterButton/FilterButton';

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
  const [filter, setFilter] = useState<string>('ALL');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const data: Item[] = [
    { id: 1, category: 'ALL', title: 'Item 1' },
    { id: 2, category: '남성', title: 'Item 2' },
    { id: 3, category: '청소년', title: 'Item 3' },
    { id: 4, category: '여성', title: 'Item 4' },
    // ...
  ];

  const filteredData = data.filter(item => filter === 'ALL' || item.category === filter);

  return (
    <div>
      <FilterWrapper>
        <FilterButton active={filter === 'ALL'} onClick={() => handleFilterChange('ALL')} buttonText='ALL'>전체</FilterButton>
        <FilterButton active={filter === '여성'} onClick={() => handleFilterChange('여성')} buttonText='👩🏻‍🦳'>여성이</FilterButton>
        <FilterButton active={filter === '남성'} onClick={() => handleFilterChange('남성')} buttonText='👨🏻‍🦳'>남성이</FilterButton>
        <FilterButton active={filter === '청소년'} onClick={() => handleFilterChange('청소년')} buttonText='👦🏻'>청소년이</FilterButton>
      </FilterWrapper>
      <div>
        {filteredData.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
