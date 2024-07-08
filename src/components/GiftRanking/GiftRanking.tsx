import './GiftRanking.css';

import useGiftRanking from '../../hooks/useGiftRanking';

type Filter = '전체' | '여성이' | '남성이' | '청소년이';
type SubFilter = '받고 싶어한' | '많이 선물한' | '위시로 받은';

const filters: Filter[] = ['전체', '여성이', '남성이', '청소년이'];
const subFilters: SubFilter[] = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const GiftRanking: React.FC = () => {
  const { filteredItems, filter, setFilter, subFilter, setSubFilter, showMore, setShowMore } =
    useGiftRanking();

  return (
    <div className="gift-ranking">
      <h2>실시간 급상승 선물랭킹</h2>
      <div className="filters">
        {filters.map((filterOption) => (
          <button
            key={filterOption}
            className={`filter-button ${filter === filterOption ? 'active' : ''}`}
            onClick={() => setFilter(filterOption)}
          >
            {filterOption}
          </button>
        ))}
      </div>
      <div className="sub-filters">
        {subFilters.map((subFilterOption) => (
          <button
            key={subFilterOption}
            className={`sub-filter-button ${subFilter === subFilterOption ? 'active' : ''}`}
            onClick={() => setSubFilter(subFilterOption)}
          >
            {subFilterOption}
          </button>
        ))}
      </div>
      <div className="items">
        {filteredItems.slice(0, showMore ? filteredItems.length : 6).map((item, index) => (
          <div key={index} className="item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-info">
              <p className="item-name">{item.name}</p>
              <p className="item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="toggle-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? '접기' : '더보기'}
      </button>
    </div>
  );
};

export default GiftRanking;
