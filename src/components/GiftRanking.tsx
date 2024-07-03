import React, { useState } from 'react';

const GiftRanking: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const items = [1, 2, 3, 4, 5].map((item) => (
    <div key={item}>
      <img src="https://via.placeholder.com/150" alt="Gift" />
      <p>Gift {item}</p>
      <p>Price: 29000원</p>
      {/* filter에 따른 조건부 렌더링 */}
      {filter === 'all' ? (
        <p>Available for everyone</p>
      ) : (
        <p>Recommended for {filter}</p>
      )}
    </div>
  ));

  return (
    <section>
      <h3>실시간 급상승 선물랭킹</h3>
      <div>
        <button onClick={() => handleFilterChange('all')}>ALL</button>
        <button onClick={() => handleFilterChange('women')}>여성이</button>
        <button onClick={() => handleFilterChange('men')}>남성이</button>
        <button onClick={() => handleFilterChange('teenagers')}>청소년이</button>
      </div>
      <div>
        <button onClick={() => handleFilterChange('wanted')}>받고 싶어한</button>
        <button onClick={() => handleFilterChange('gifted')}>많이 선물한</button>
        <button onClick={() => handleFilterChange('wishlisted')}>위시로 받은</button>
      </div>
      <div>
        {items}
      </div>
      <button>더보기</button>
    </section>
  );
};

export default GiftRanking;
