import { RankData } from '@/constants/RankData';

export const filterRankData = (target: string, giftType: string) => {
  return RankData.filter((data) => {
    const targetMatch = target === '전체' || data.target === target;
    const giftTypeMatch = giftType === '전체' || data.giftType === giftType;
    return targetMatch && giftTypeMatch;
  });
};
