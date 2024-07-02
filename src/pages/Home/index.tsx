import styled from '@emotion/styled';

import { AnnualCategory } from './AnnualCategory';
import { Badge } from './Badge';
import { MainMent } from './MainMent';

export const Home = () => {
  return (
    <Wrapper>
      <MainMent />
      <AnnualCategory />
      <Badge />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
