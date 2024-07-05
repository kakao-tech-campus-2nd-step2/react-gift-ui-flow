import React, { useState } from 'react';

import NewFilterButtons from '@/components/NewFilterButton/NewFilterButton';

import CategoryList from '../components/Category/CategoryList';
import FilterButtons from '../components/FilterButtons/FilterButtons';
import ProductList from '../components/ProductList/ProductList';

const trendingSectionStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '50px',
};

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [newActiveFilter, setNewActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  const handleNewFilterClick = (filter: string) => {
    setNewActiveFilter(filter);
  };

  return (
    <div>
      <section>
        <CategoryList />
      </section>
      <section>
        <FilterButtons activeFilter={activeFilter} onFilterClick={handleFilterClick} />
        <div style={trendingSectionStyle}>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}
          >
            <NewFilterButtons
              newActiveFilter={newActiveFilter}
              onNewFilterClick={handleNewFilterClick}
            />
          </div>
        </div>
        <div>
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
