import API from "@/constants/api";
import { RankingItem } from "@/model/Ranking";

export const getRealtimeRank = async (
  isExpanded: boolean,
): Promise<RankingItem[]> => {
  const fetchUrl = isExpanded ? API.REALTIMERANK : API.REALTIEMRANK_PREVIEW;
  return await fetch(fetchUrl).then((res) => res.json());
};
