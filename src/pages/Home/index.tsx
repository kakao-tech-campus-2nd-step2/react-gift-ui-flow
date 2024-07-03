import styled from '@emotion/styled';

import { AnnualCategory } from './AnnualCategory';
import { Badge } from './Badge';
import { MainMent } from './MainMent';
import { Ranking } from './Ranking';

export const Home = () => {
  return (
    <Wrapper>
      <MainMent />
      <AnnualCategory />
      <Badge />
      <Ranking />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
