import styled from "@emotion/styled";

const Title = () => {
  const realTimeRankingTitle = "실시간 급상승 선물랭킹";
  return (
    <SyledRealTimeRankingTitle>
      {realTimeRankingTitle}
    </SyledRealTimeRankingTitle>
  );
};

const SyledRealTimeRankingTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
`;

export default Title;
