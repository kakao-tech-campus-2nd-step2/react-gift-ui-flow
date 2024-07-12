import { css } from '@emotion/react';

const commonStyles = css`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    border: 0;
    clip: rect(0 0 0 0);
  }
`;

export default commonStyles;
