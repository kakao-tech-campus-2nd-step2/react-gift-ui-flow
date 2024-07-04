import styled from '@emotion/styled';

import { Badge } from './Badge';
import { MainMent } from './MainMent';
import { Ranking } from './Ranking';
import { Theme } from './Theme';

export const Home = () => {
  return (
    <Wrapper>
      <MainMent />
      <Theme />
      <Badge />
      <Ranking />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
