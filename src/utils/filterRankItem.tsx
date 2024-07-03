import { rankListData } from '@/mocks/mockData';
import { FilterRankItemType } from '@/types/rankTypes';

export const getFilteredRankItem = (
  userFilter: string,
  giftFilter: string
): FilterRankItemType[] => {
  return rankListData
    .filter((item) => {
      return (
        (userFilter === '전체' || item.userType === userFilter) &&
        item.giftType === giftFilter
      );
    })
    .map((item, index) => ({
      ...item,
      rank: index + 1,
    }));
};
