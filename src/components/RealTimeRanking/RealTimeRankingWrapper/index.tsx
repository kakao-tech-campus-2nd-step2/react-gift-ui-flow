import { createContext, useEffect, useState } from "react";
import Title from "./Title";
import WhoFilter from "./WhoFilter";
import PurposeFilter from "./PurposeFilter";
import Content from "./Content";
import IMAGE from "@/constants/Image";

export const RealTimeRankContext = createContext(null);

const mockData = [
  {
    imageSrc: IMAGE.PRODUCT,
    subtitle: "BBQ",
    title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    amount: 0,
    rankingIndex: 1,
  },
  {
    imageSrc: IMAGE.PRODUCT,
    subtitle: "BBQ",
    title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    amount: 0,
    rankingIndex: 2,
  },
  {
    imageSrc: IMAGE.PRODUCT,
    subtitle: "BBQ",
    title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    amount: 0,
    rankingIndex: 3,
  },
  {
    imageSrc: IMAGE.PRODUCT,
    subtitle: "BBQ",
    title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    amount: 0,
    rankingIndex: 4,
  },
  {
    imageSrc: IMAGE.PRODUCT,
    subtitle: "BBQ",
    title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    amount: 0,
    rankingIndex: 5,
  },
  {
    imageSrc: IMAGE.PRODUCT,
    subtitle: "BBQ",
    title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    amount: 0,
    rankingIndex: 6,
  },
];

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

  useEffect(() => {
    // fetch data

    setRankData(mockData);
  }, [filter]);

  const setFilterWho = (who: RealTimeRankingFilter["who"]) => {
    setFilter({ ...filter, who });
  };

  const setFilterPurpose = (purpose: RealTimeRankingFilter["purpose"]) => {
    setFilter({ ...filter, purpose });
  };

  return (
    <RealTimeRankContext.Provider
      value={{ filter, rankData, setFilterWho, setFilterPurpose }}
    >
      {children}
    </RealTimeRankContext.Provider>
  );
};

RealTimeRankingWrapper.Title = Title;
RealTimeRankingWrapper.WhoFilter = WhoFilter;
RealTimeRankingWrapper.PurposeFilter = PurposeFilter;
RealTimeRankingWrapper.Content = Content;
export default RealTimeRankingWrapper;
