import { css } from '@emotion/react';

export const itemContainerStyle = css({
  maxWidth: '9rem',
  width: '100%',
  '@media (min-width: 520px)': {
    maxWidth: '14rem',
    minWidth: '9rem',
  },
  '@media (min-width: 768px)': {
    maxWidth: '13rem',
  },
  '@media (min-width: 1024px)': {
    maxWidth: '10rem',
  },
});
