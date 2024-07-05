import { useState } from 'react';

import type { GenderFilter, GiftFilter } from '@/interfaces/FilterInterface';

const useFilter = () => {
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('ALL');
  const [giftFilter, setGiftFilter] = useState<GiftFilter>('WHAT_I_WANT');

  const changeGenderFilter = (filter: GenderFilter) => {
    setGenderFilter(filter);
  };

  const changeGiftFilter = (filter: GiftFilter) => {
    setGiftFilter(filter);
  };

  return {
    genderFilter,
    giftFilter,
    changeGenderFilter,
    changeGiftFilter,
  };
};

export default useFilter;
