import API from "@/constants/api";
import { RankingItem } from "@/model/Ranking";

export const getRealtimeRank = async (
  isExpanded: boolean,
): Promise<RankingItem[]> => {
  const fetchUrl = isExpanded ? API.REALTIMERANK : API.REALTIEMRANK_PREVIEW;
  return await fetch(fetchUrl).then((res) => res.json());
};

export const getThemeDetail =
  async () // themeKey: string, : 원래대로라면 themeKey를 받아와야 하지만, 지금은 사용하지 않으므로 제거
  : Promise<RankingItem[]> => {
    return await fetch(API.THEME_DETAIL).then((res) => res.json());
  };
