import { useEffect, useState } from 'react';

import { INITIAL_ITEMS_COUNT } from '@/pages/HomePage/data/initailCount';
import {
  FilterRankItemType,
  GiftFilterType,
  UserFilterType,
} from '@/types/rankTypes';

export const useVisibleList = (
  filteredList: FilterRankItemType[],
  userFilter: UserFilterType,
  giftFilter: GiftFilterType
) => {
  const [visibleItemCount, setVisibleItemCount] = useState(INITIAL_ITEMS_COUNT);
  const visibleItems = filteredList.slice(0, visibleItemCount);

  useEffect(() => {
    setVisibleItemCount(INITIAL_ITEMS_COUNT);
  }, [userFilter, giftFilter]);

  return { visibleItems, visibleItemCount, setVisibleItemCount };
};
