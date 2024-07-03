import { useContext } from 'react';

import { RankListContexType, RankListContext } from './RankListContext';

export const useRankList = (): RankListContexType => {
  const context = useContext(RankListContext);

  if (!context) {
    throw new Error('useRankListContext를 반드시 사용해야합니다.');
  }
  return context;
};
