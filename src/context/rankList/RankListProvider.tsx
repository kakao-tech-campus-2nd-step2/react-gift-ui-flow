import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { useFilter } from '@/context/filter/useFilter';
import { getFilteredRankItem } from '@/utils/filterRankItem';

import { RankListContext } from './RankListContext';

const INITIAL_ITEMS_COUNT = 6;

export const RankListProvider = ({ children }: { children: ReactNode }) => {
  const { userFilter, giftFilter } = useFilter();
  const filteredData = getFilteredRankItem(userFilter, giftFilter);

  const [visibleItemCount, setVisibleItemCount] = useState(INITIAL_ITEMS_COUNT);

  const visibleItems = filteredData.slice(0, visibleItemCount);
  const isExpanded = visibleItemCount >= filteredData.length;

  const handleShowMore = useCallback(() => {
    setVisibleItemCount(filteredData.length);
  }, [filteredData.length]);

  const handleShowLess = useCallback(() => {
    setVisibleItemCount(INITIAL_ITEMS_COUNT);
  }, []);

  useEffect(() => {
    setVisibleItemCount(INITIAL_ITEMS_COUNT);
  }, [userFilter, giftFilter]);

  const contextValue = useMemo(
    () => ({
      visibleItems,
      isExpanded,
      handleShowMore,
      handleShowLess,
    }),
    [visibleItems, isExpanded, handleShowLess, handleShowMore]
  );

  return (
    <RankListContext.Provider value={contextValue}>
      {children}
    </RankListContext.Provider>
  );
};
