import styled from "@emotion/styled";
import { RealTimeRankingFilter } from ".";

const purposeFilterList: RealTimeRankingFilter["purpose"][] = [
  "받고싶어한",
  "많이 선물한",
  "위시로 받은",
];

const PurposeFilter = () => {
  return (
    <StyledPurposeFilter>
      {purposeFilterList.map((target, index) => (
        <li key={`${index}-${target}`}>{target}</li>
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

export default PurposeFilter;
