import { useState } from 'react';

interface FilterState {
  target: string;
  wish: string;
}

export default function useFilter(initialTarget: string, initialWish: string) {
  const [filters, setFilters] = useState<FilterState>({
    target: initialTarget,
    wish: initialWish,
  });

  const selectTarget = (target: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, target }));
  };

  const selectWish = (wish: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, wish }));
  };

  return {
    selectedTarget: filters.target,
    selectedWish: filters.wish,
    selectTarget,
    selectWish,
  };
}
