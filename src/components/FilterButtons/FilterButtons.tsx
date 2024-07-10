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
  const getButtonLabel = (filter: string) => {
    if (filter === 'all') return 'ALL';
    if (filter === 'woman') return '👩🏻‍🦳';
    if (filter === 'man') return '👨🏻‍🦳';
    if (filter === 'teen') return '👦🏻';
    return '';
  };

  const getFilterDescription = (filter: string) => {
    if (filter === 'all') return '전체';
    if (filter === 'woman') return '여성이';
    if (filter === 'man') return '남성이';
    if (filter === 'teen') return '청소년이';
    return '';
  };

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
              {getButtonLabel(filter)}
            </button>
            <div>{getFilterDescription(filter)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
