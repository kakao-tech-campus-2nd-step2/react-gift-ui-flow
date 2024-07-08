import { useState } from 'react';

import type { GiftItem } from '@/data/giftItems';
import { giftItems } from '@/data/giftItems';

const useGiftRanking = () => {
  const [filter, setFilter] = useState('전체');
  const [subFilter, setSubFilter] = useState('받고 싶어한');
  const [showMore, setShowMore] = useState(false);

  const items: GiftItem[] = giftItems;

  const filteredItems = items;

  return { filteredItems, filter, setFilter, subFilter, setSubFilter, showMore, setShowMore };
};

export default useGiftRanking;
