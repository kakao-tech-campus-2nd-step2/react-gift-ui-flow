import styled from '@emotion/styled';
import React, { useState } from 'react';

import FilterButton from '@/components/common/FilterButton/FilterButton';
import RankingItems from '@/components/Ranking/RankingItems/RankingItems';

import FilterTabs from './FilterTabs';

const FilterContent = styled.div`
  margin: 20px auto;
  `;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const items = [
  { id: 1, category: 'ALL', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 10000 },
  { id: 2, category: '여성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 3, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 4, category: '청소년', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 5, category: '여성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 6, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 7, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 8, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 9, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 10, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 11, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 12, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 13, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 14, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 15, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 16, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 17, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 18, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 19, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 20, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
  { id: 21, category: '남성', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 20000 },
];

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

  const filteredItems = items.filter(item => activeFilters.ALL || activeFilters[item.category]);

  return (
    <FilterContent>
      <FilterWrapper>
        <FilterButton active={activeFilters.ALL} onClick={() => handleFilterChange('ALL')} buttonText='ALL'>전체</FilterButton>
        <FilterButton active={activeFilters.여성} onClick={() => handleFilterChange('여성')} buttonText='👩🏻‍🦳'>여성이</FilterButton>
        <FilterButton active={activeFilters.남성} onClick={() => handleFilterChange('남성')} buttonText='👨🏻‍🦳'>남성이</FilterButton>
        <FilterButton active={activeFilters.청소년} onClick={() => handleFilterChange('청소년')} buttonText='👦🏻'>청소년이</FilterButton>
      </FilterWrapper>
      <div>
        <FilterTabs activeTab={tab} onTabChange={handleTabChange} />
      </div>
      <RankingItems items={filteredItems} />
    </FilterContent>
  );
};

export default Filter;
