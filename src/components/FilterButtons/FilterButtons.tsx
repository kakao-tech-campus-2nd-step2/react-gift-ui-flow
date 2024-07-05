import React from 'react';

const filterButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  margin: '20px 60px',
  borderRadius: '20px',
  cursor: 'pointer',
  backgroundColor: '#E6F1FF',
  color: '#fff',
  fontWeight: 'bold',
  border: 'none',
};

const activeFilterButtonStyle: React.CSSProperties = {
  ...filterButtonStyle,
  backgroundColor: '#007bff',
  color: '#fff',
};

interface FilterButtonsProps {
  activeFilter: string;
  onFilterClick: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilter, onFilterClick }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontWeight: 'bold' }}>실시간 급상승 선물랭킹</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {['all', 'woman', 'man', 'teen'].map((filter) => (
          <div key={filter}>
            <button
              style={activeFilter === filter ? activeFilterButtonStyle : filterButtonStyle}
              onClick={() => onFilterClick(filter)}
            >
              {filter === 'all' && 'ALL'}
              {filter === 'woman' && '👩🏻‍🦳'}
              {filter === 'man' && '👨🏻‍🦳'}
              {filter === 'teen' && '👦🏻'}
            </button>
            <div>
              {filter === 'all'
                ? '전체'
                : filter === 'woman'
                  ? '여성이'
                  : filter === 'man'
                    ? '남성이'
                    : '청소년이'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
