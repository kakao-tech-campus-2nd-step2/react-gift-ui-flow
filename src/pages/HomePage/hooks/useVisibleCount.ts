import { Dispatch, SetStateAction } from 'react';

import { INITIAL_ITEMS_COUNT } from '@/pages/HomePage/data/initailCount';

export const useVisibleCount = (
  filtereditemCount: number,
  visibleItemCount: number,
  setVisibleItemCount: Dispatch<SetStateAction<number>>
) => {
  const isExpanded = visibleItemCount >= filtereditemCount;

  const handleShowMore = () => {
    setVisibleItemCount(filtereditemCount);
  };

  const handleShowLess = () => {
    setVisibleItemCount(INITIAL_ITEMS_COUNT);
  };

  return {
    isExpanded,
    handleShowMore,
    handleShowLess,
  };
};
