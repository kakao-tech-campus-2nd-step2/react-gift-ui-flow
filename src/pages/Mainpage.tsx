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
  { key: '생일', name: '생일' },
  { key: '스몰럭셔리', name: '스몰럭셔리' },
  { key: '명품선물', name: '명품선물' },
  { key: '가벼운선물', name: '가벼운선물' },
  { key: '시원한선물', name: '시원한선물' },
  { key: '결혼집들이', name: '결혼집들이' },
  { key: '응원시험', name: '응원시험' },
  { key: '팬심저격', name: '팬심저격' },
  { key: '교환권', name: '교환권' },
  { key: '건강비타민', name: '건강비타민' },
  { key: '과일한우', name: '과일한우' },
  { key: '출산키즈', name: '출산키즈' },
];

const items: Item[] = [
  { id: 1, name: 'Gift Item 1', category: '여성', rank: 1 },
  { id: 2, name: 'Gift Item 2', category: '남성', rank: 2 },
  { id: 3, name: 'Gift Item 3', category: '청소년', rank: 3 },
  { id: 4, name: 'Gift Item 4', category: '여성', rank: 4 },
  { id: 5, name: 'Gift Item 5', category: '남성', rank: 5 },
  { id: 6, name: 'Gift Item 6', category: '청소년', rank: 6 },
  { id: 7, name: 'Gift Item 7', category: '여성', rank: 7 },
  { id: 8, name: 'Gift Item 8', category: '남성', rank: 8 },
  //아이템 추가하기
];

const Mainpage: React.FC = () => {
  const { filter, changeFilter, filterOptions } = useFilter();
  const [showMore, setShowMore] = useState(false);

  const filterItems = items.filter((item) => {
    if (filter === '전체') return true;
    return item.category === filter;
  });

  const displayedItems = showMore ? filterItems : filterItems.slice(0, 6);

  return (
    <div>
      <h2>Themes</h2>
      <div>
        {themes.map((theme) => (
          <Link key={theme.key} to={`/theme/${theme.key}`}>
            <ThemeItem themeKey={theme.key} themeName={theme.name} />
          </Link>
        ))}
      </div>

      <h2>필터</h2>
      <div>
        {filterOptions.map((f) => (
          <button key={f} onClick={() => changeFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <h2>실시간 급상승 선물랭킹</h2>
      <div>
        {displayedItems.map((item) => (
          <RankingGoodsItems
            key={item.id}
            rankingIndex={item.rank}
            name={item.name}
            imageSrc="/images/item.png"
            subtitle=""
            title={item.name}
            amount={0}
          />
        ))}
      </div>

      {filterItems.length > 6 && (
        <button onClick={() => setShowMore(!showMore)}>{showMore ? '접기' : '더보기'}</button>
      )}
    </div>
  );
};

export default Mainpage;
