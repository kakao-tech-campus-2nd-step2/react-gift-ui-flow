import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

import { PersonCategory } from './PersonCategory';
import { SituationCategory } from './SituationCategory';

export const Ranking = () => {
  return (
    <Wrapper>
      <Title>실시간 급상승 선물랭킹</Title>
      <PersonCategory />
      <SituationCategory />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${breakpoints.md};
  margin: 150px auto;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;
