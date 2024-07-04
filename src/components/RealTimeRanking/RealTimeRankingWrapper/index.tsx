import { createContext, useEffect, useState } from "react";
import Title from "./Title";
import WhoFilter from "./WhoFilter";
import PurposeFilter from "./PurposeFilter";
import Content from "./Content";
import API from "@/constants/api";
import ExpandBtn from "./ExpandBtn";

export const RealTimeRankContext = createContext(null);

export interface RealTimeRankingFilter {
  who: "전체" | "여성이" | "남성이" | "청소년이";
  purpose: "받고싶어한" | "많이 선물한" | "위시로 받은";
}

const defaultFilter: RealTimeRankingFilter = {
  who: "전체",
  purpose: "받고싶어한",
};

interface RealTimeRankingWrapperProps {
  children: React.ReactNode;
}
const RealTimeRankingWrapper = ({ children }: RealTimeRankingWrapperProps) => {
  const [filter, setFilter] = useState(defaultFilter);
  const [rankData, setRankData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // TODO: fetch문 분리하기
    const fetchUrl = isExpanded ? API.REALTIMERANK : API.REALTIEMRANK_PREVIEW;
    function fetchData() {
      fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
          setRankData(data);
        });
    }
    fetchData();
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
