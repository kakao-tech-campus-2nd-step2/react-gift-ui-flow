import { useState } from 'react';

import type { FilterCategory, FilterSubCategory } from '@/types/index';

const useFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('전체');
  const [selectedSubCategory, setSelectedSubCategory] = useState<FilterSubCategory>('받고 싶어한');

  return {
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
  };
};

export default useFilters;
