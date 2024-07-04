import { createContext, useEffect, useState } from "react";
import Title from "./Title";
import WhoFilter from "./WhoFilter";
import PurposeFilter from "./PurposeFilter";
import Content from "./Content";
import ExpandBtn from "./ExpandBtn";
import { getRealtimeRank } from "@/api";
import { RankingItem, RealTimeRankingFilter } from "@/model/Ranking";

export const RealTimeRankContext = createContext(null);

const defaultFilter: RealTimeRankingFilter = {
  who: "전체",
  purpose: "받고싶어한",
};

interface RealTimeRankingWrapperProps {
  children: React.ReactNode;
}
const RealTimeRankingWrapper = ({ children }: RealTimeRankingWrapperProps) => {
  const [filter, setFilter] = useState(defaultFilter);
  const [rankData, setRankData] = useState<RankingItem[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    getRealtimeRank(isExpanded).then((realTimeRankingdata) =>
      setRankData(realTimeRankingdata),
    );
  }, [filter, isExpanded]);

  const setFilterWho = (who: RealTimeRankingFilter["who"]) => {
    setFilter({ ...filter, who });
  };

  const setFilterPurpose = (purpose: RealTimeRankingFilter["purpose"]) => {
    setFilter({ ...filter, purpose });
  };

  return (
    <RealTimeRankContext.Provider
      value={{
        filter,
        rankData,
        setFilterWho,
        setFilterPurpose,
        isExpanded,
        setIsExpanded,
      }}
    >
      {children}
    </RealTimeRankContext.Provider>
  );
};

RealTimeRankingWrapper.Title = Title;
RealTimeRankingWrapper.WhoFilter = WhoFilter;
RealTimeRankingWrapper.PurposeFilter = PurposeFilter;
RealTimeRankingWrapper.Content = Content;
RealTimeRankingWrapper.ExpandBtn = ExpandBtn;

export default RealTimeRankingWrapper;
