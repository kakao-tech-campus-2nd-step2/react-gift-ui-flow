import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface InnerContainerProps {
  justifyContent: string;
}

export const GlobalStyle = css`
  * {
    box-sizing: border-box;
  }

  img {
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const InnerContainer = styled.div<InnerContainerProps>`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
`;

export const Img = styled.img`
  overflow-clip-margin: content-box;
  overflow: clip;
`;

export const Div = styled.div`
  display: block;
  unicode-bidi: isolate;
`;
