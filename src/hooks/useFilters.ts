import { useState } from 'react';

type FilterCategory = '전체' | '여성이' | '남성이' | '청소년이';
type FilterSubCategory = '받고 싶어한' | '많이 선물한' | '위시로 받은';

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
