import { RealTimeRankContext } from ".";
import styled from "@emotion/styled";
import { useContext } from "react";
import WhoFilterItem from "./WhoFilterItem";
import { RealTimeRankingFilter } from "@/model/Ranking";

const WhoFilterList: {
  target: RealTimeRankingFilter["who"];
  filterImage: string;
}[] = [
  {
    target: "전체",
    filterImage: "ALL",
  },
  {
    target: "여성이",
    filterImage: "👩",
  },
  {
    target: "남성이",
    filterImage: "🧑",
  },
  {
    target: "청소년이",
    filterImage: "👦",
  },
];

const WhoFilter = () => {
  const {
    filter: { who },
    setFilterWho,
  } = useContext(RealTimeRankContext);
  return (
    <StyledWhoFilter>
      {WhoFilterList.map(({ target, filterImage }, index) => (
        <WhoFilterItem
          key={`${index}-${target}`}
          target={target}
          selected={who}
          filterImage={filterImage}
          onClick={() => setFilterWho(target)}
        />
      ))}
    </StyledWhoFilter>
  );
};

const StyledWhoFilter = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
  padding: 20px;
`;
export default WhoFilter;
