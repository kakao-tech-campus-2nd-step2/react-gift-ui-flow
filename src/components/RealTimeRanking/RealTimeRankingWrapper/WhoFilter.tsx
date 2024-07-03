import Icon from "@/components/common/GoodsItem/Icon";
import { RealTimeRankingFilter } from ".";
import styled from "@emotion/styled";

const WhoFilterList: RealTimeRankingFilter["who"][] = [
  "전체",
  "여성이",
  "남성이",
  "청소년이",
];

const WhoFilter = () => {
  return (
    <StyledWhoFilter>
      {WhoFilterList.map((target, index) => (
        <li key={`${index}-${target}`}>
          <Icon imageSrc={""} text={target} />
        </li>
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
