import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const ResetStyles = () => (
  <Global
    styles={css`
      ${emotionReset}

      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }
    `}
  />
);
