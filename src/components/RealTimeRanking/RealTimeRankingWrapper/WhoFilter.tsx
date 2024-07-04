import { RealTimeRankContext, RealTimeRankingFilter } from ".";
import styled from "@emotion/styled";
import { useContext } from "react";
import WhoFilterItem from "./WhoFilterItem";

const WhoFilterList: RealTimeRankingFilter["who"][] = [
  "전체",
  "여성이",
  "남성이",
  "청소년이",
];

const WhoFilter = () => {
  const {
    filter: { who },
    setFilterWho,
  } = useContext(RealTimeRankContext);
  return (
    <StyledWhoFilter>
      {WhoFilterList.map((target, index) => (
        <WhoFilterItem
          key={`${index}-${target}`}
          target={target}
          selected={who}
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
