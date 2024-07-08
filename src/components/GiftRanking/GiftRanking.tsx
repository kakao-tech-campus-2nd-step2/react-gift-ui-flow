import './GiftRanking.css';

import useGiftRanking from './useGiftRanking';

const GiftRanking: React.FC = () => {
  const { filteredItems, filter, setFilter, subFilter, setSubFilter, showMore, setShowMore } =
    useGiftRanking();
  const filters = ['전체', '여성이', '남성이', '청소년이'];
  const subFilters = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  return (
    <div className="gift-ranking">
      <h2>실시간 급상승 선물랭킹</h2>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-button ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="sub-filters">
        {subFilters.map((sf) => (
          <button
            key={sf}
            className={`sub-filter-button ${subFilter === sf ? 'active' : ''}`}
            onClick={() => setSubFilter(sf)}
          >
            {sf}
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
