/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Container } from '@/components/common/Layout/Container';

export const Footer = () => {
  return (
    <Wrapper>
      <Container maxWidth="1024px">
        <p
          css={css`
            margin-top: 50px;
          `}
        >
          카카오톡 선물하기
        </p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 200px;
  background-color: rgb(250, 250, 250);
`;
