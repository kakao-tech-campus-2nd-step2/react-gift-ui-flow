import { useState } from 'react';

import { GiftFilterType, UserFilterType } from '@/types/rankTypes';

export const useRankFilters = () => {
  const [userFilter, setUserFilter] = useState<UserFilterType>('전체');
  const [giftFilter, setGiftFilter] = useState<GiftFilterType>('받고 싶어한');

  return { userFilter, giftFilter, setUserFilter, setGiftFilter };
};
