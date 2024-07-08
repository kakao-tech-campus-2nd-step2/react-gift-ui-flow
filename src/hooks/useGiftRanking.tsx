import { useState } from 'react';

import type { GiftItem } from '../data/giftItems';
import { giftItems } from '../data/giftItems';

type Filter = '전체' | '여성이' | '남성이' | '청소년이';
type SubFilter = '받고 싶어한' | '많이 선물한' | '위시로 받은';

const useGiftRanking = () => {
  const [filter, setFilter] = useState<Filter>('전체');
  const [subFilter, setSubFilter] = useState<SubFilter>('받고 싶어한');
  const [showMore, setShowMore] = useState<boolean>(false);

  const items: GiftItem[] = giftItems;

  const filteredItems = items;

  return { filteredItems, filter, setFilter, subFilter, setSubFilter, showMore, setShowMore };
};

export default useGiftRanking;
