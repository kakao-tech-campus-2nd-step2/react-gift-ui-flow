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
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export default Title;
