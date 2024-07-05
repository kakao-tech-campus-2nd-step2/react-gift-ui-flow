import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
`;

export const ThemePage = () => {
  return (
    <Wrapper>
      <Container>
        <h1>ThemePage</h1>
      </Container>
    </Wrapper>
  );
};

export default ThemePage;
