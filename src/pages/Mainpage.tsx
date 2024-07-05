import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import ThemeItem from '@/components/common/ThemeItem';
import { useFilter } from '@/hooks/useFilter';

type Item = {
  id: number;
  name: string;
  category: string;
  rank: number;
};

const themes = [
  { key: '생일', name: '생일', imgSrc: '/images/cake.jpg' },
  { key: '스몰럭셔리', name: '스몰럭셔리', imgSrc: '/images/cake.jpg' },
  { key: '명품선물', name: '명품선물', imgSrc: '/images/cake.jpg' },
  { key: '가벼운선물', name: '가벼운선물', imgSrc: '/images/cake.jpg' },
  { key: '시원한선물', name: '시원한선물', imgSrc: '/images/cake.jpg' },
  { key: '결혼집들이', name: '결혼집들이', imgSrc: '/images/cake.jpg' },
  { key: '응원시험', name: '응원시험', imgSrc: '/images/cake.jpg' },
  { key: '팬심저격', name: '팬심저격', imgSrc: '/images/cake.jpg' },
  { key: '교환권', name: '교환권', imgSrc: '/images/cake.jpg' },
  { key: '건강비타민', name: '건강비타민', imgSrc: '/images/cake.jpg' },
  { key: '과일한우', name: '과일한우', imgSrc: '/images/cake.jpg' },
  { key: '출산키즈', name: '출산키즈', imgSrc: '/images/cake.jpg' },
];

const items: Item[] = [
  { id: 1, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '여성', rank: 1 },
  { id: 2, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '남성', rank: 2 },
  { id: 3, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '청소년', rank: 3 },
  { id: 4, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '여성', rank: 4 },
  { id: 5, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '남성', rank: 5 },
  { id: 6, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '청소년', rank: 6 },
  { id: 7, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '여성', rank: 7 },
  { id: 8, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '남성', rank: 8 },
  { id: 9, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '청소년', rank: 9 },
  { id: 10, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '여성', rank: 10 },
  { id: 11, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '남성', rank: 11 },
  { id: 12, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: '청소년', rank: 12 },
];

const Mainpage: React.FC = () => {
  const { filter, changeFilter, filterOptions } = useFilter();
  const [showMore, setShowMore] = useState(false);

  const displayedItems = showMore ? items : items.slice(0, 6);

  return (
    <div>
      <h2>선물 받을 친구를 선택해주세요.</h2>
      <ThemeGrid>
        {themes.map((theme) => (
          <Link key={theme.key} to={`/theme/${theme.key}`}>
            <ThemeItem themeKey={theme.key} themeName={theme.name} imgSrc={theme.imgSrc} />
          </Link>
        ))}
      </ThemeGrid>

      <h2>실시간 급상승 선물랭킹</h2>
      <FilterButtons>
        {filterOptions.map((option) => (
          <FilterButton
            key={option.value}
            onClick={() => changeFilter(option.value)}
            selected={filter === option.value}
          >
            {option.label}
          </FilterButton>
        ))}
      </FilterButtons>

      <ItemGrid>
        {displayedItems.map((item) => (
          <RankingGoodsItems
            key={item.id}
            imageSrc="/images/item.png"
            title={item.name}
            amount={29000}
            rankingIndex={item.id}
            name={''}
            subtitle={''}
          />
        ))}
      </ItemGrid>
      {items.length > 6 && (
        <button onClick={() => setShowMore(!showMore)}>{showMore ? '접기' : '더보기'}</button>
      )}
    </div>
  );
};

export default Mainpage;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? '#007bff' : '#f0f0f0')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#0069d9' : '#e0e0e0')};
  }
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 50px;
`;
