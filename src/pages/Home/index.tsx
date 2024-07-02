import styled from '@emotion/styled';

import { AnnualCategory } from './AnnualCategory';
import { MainMent } from './MainMent';

export const Home = () => {
  return (
    <Wrapper>
      <MainMent />
      <AnnualCategory />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
