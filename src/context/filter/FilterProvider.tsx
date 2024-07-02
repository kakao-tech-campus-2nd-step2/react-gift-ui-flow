import { ReactNode, useMemo, useState } from 'react';

import { GiftFilterType, UserFilterType } from '@/types/rankTypes';

import { FilterContext } from './FilterContext';

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [userFilter, setUserFilter] = useState<UserFilterType>('전체');
  const [giftFilter, setGiftFilter] = useState<GiftFilterType>('받고 싶어한');

  const contextValue = useMemo(
    () => ({
      userFilter,
      giftFilter,
      setUserFilter,
      setGiftFilter,
    }),
    [userFilter, giftFilter]
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
