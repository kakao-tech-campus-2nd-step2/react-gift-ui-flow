import { createContext } from 'react';

import { FilterRankItemType } from '@/types/rankTypes';

export type RankListContexType = {
  visibleItems: FilterRankItemType[];
  isExpanded: boolean;
  handleShowMore: () => void;
  handleShowLess: () => void;
};

export const RankListContext = createContext<RankListContexType | undefined>(
  undefined
);
