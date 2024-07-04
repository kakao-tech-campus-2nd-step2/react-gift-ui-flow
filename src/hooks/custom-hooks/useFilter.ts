import { useState } from 'react';

type GenderFilter = 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
type GiftFilter = 'WANT' | 'GIVEN' | 'WISHED';

const useFilter = () => {
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('ALL');
  const [giftFilter, setGiftFilter] = useState<GiftFilter>('WANT');

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
