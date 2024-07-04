import { RealTimeRankContext } from ".";
import { useContext } from "react";
import styled from "@emotion/styled";
import { RealTimeRankingFilter } from "@/model/Ranking";

const purposeFilterList: RealTimeRankingFilter["purpose"][] = [
  "받고싶어한",
  "많이 선물한",
  "위시로 받은",
];

const PurposeFilter = () => {
  const {
    filter: { purpose },
    setFilterPurpose,
  } = useContext(RealTimeRankContext);

  return (
    <StyledPurposeFilter>
      {purposeFilterList.map((target, index) => (
        <StyledPurposeFilterList
          key={`${index}-${target}`}
          $selected={purpose}
          $target={target}
          onClick={() => setFilterPurpose(target)}
        >
          {target}
        </StyledPurposeFilterList>
      ))}
    </StyledPurposeFilter>
  );
};

const StyledPurposeFilter = styled.ul`
  display: flex;
  background-color: #e6f1ff;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
`;

interface StyledPurposeFilterListProps {
  $selected: RealTimeRankingFilter["purpose"];
  $target: RealTimeRankingFilter["purpose"];
}

const StyledPurposeFilterList = styled.li<StyledPurposeFilterListProps>`
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  color: ${({ $selected, $target }) =>
    $selected === $target ? "#77A5F1" : ""};
`;

export default PurposeFilter;
