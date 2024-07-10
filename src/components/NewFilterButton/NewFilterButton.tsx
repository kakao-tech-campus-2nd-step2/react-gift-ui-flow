import React from 'react';

const newFilterButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '10px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: '#4684E9B3',
  fontWeight: 'bold',
  borderBottom: 'none',
  fontSize: '16px',
};

const activeNewFilterButtonStyle: React.CSSProperties = {
  ...newFilterButtonStyle,
  color: '#007bff',
};

const filterContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#4684E91A',
  padding: '20px',
  borderRadius: '10px',
  width: '100%',
  height: '16px',
  margin: '0 40px',
};

interface NewFilterButtonsProps {
  newActiveFilter: string | null;
  onNewFilterClick: (filter: string) => void;
}

const NewFilterButtons: React.FC<NewFilterButtonsProps> = ({
  newActiveFilter,
  onNewFilterClick,
}) => {
  const filters = [
    { key: 'filter1', label: '받고 싶어한' },
    { key: 'filter2', label: '많이 선물한' },
    { key: 'filter3', label: '위시로 받은' },
  ];

  return (
    <div style={filterContainerStyle}>
      {filters.map((filter) => (
        <button
          key={filter.key}
          style={newActiveFilter === filter.key ? activeNewFilterButtonStyle : newFilterButtonStyle}
          onClick={() => onNewFilterClick(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default NewFilterButtons;
