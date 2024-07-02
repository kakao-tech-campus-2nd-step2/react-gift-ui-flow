import styled from '@emotion/styled';

import InnerStyle from '@/styles/innerStyle';

import Select from './select/Select';
const RecommendContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecommendInner = styled(InnerStyle)`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 35px;
    line-height: 50px;
    font-weight: 700;
  }
`;

const Ranking = () => {
  return (
    <RecommendContainer>
      <RecommendInner>
        <h2>실시간 급상승 선물 랭킹</h2>
        <Select />
      </RecommendInner>
    </RecommendContainer>
  );
};

export default Ranking;
