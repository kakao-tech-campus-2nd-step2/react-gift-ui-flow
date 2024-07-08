import styled from '@emotion/styled';

import { MainMent } from './MainMent';
import { Ranking } from './Ranking';
import { SubMent } from './SubMent';
import { Theme } from './Theme';

export const Home = () => {
  return (
    <Wrapper>
      <MainMent />
      <Theme />
      <SubMent />
      <Ranking />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
