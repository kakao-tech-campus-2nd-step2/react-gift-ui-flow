import { css } from '@emotion/react';

export const containerStyle = css({
  cursor: 'pointer',
  maxWidth: '4.75rem',
  '@media (min-width: 520px)': {
    maxWidth: '5rem',
  },
  '@media (min-width: 768px)': {
    maxWidth: '6rem',
  },
  '@media (min-width: 1024px)': {
    maxWidth: '6rem',
  },
});

export const titleStyle = css({
  fontWeight: '500',
});
