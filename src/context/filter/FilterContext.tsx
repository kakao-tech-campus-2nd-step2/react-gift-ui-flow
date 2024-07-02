import { createContext } from 'react';

import { GiftFilterType, UserFilterType } from '@/types/rankTypes';

export type FilterContextType = {
  userFilter: UserFilterType;
  giftFilter: GiftFilterType;
  setUserFilter: (filter: UserFilterType) => void;
  setGiftFilter: (filter: GiftFilterType) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);
