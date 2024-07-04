import { css } from '@emotion/react';

export const themeListStyle = css({
  padding: '4rem 2rem',
  rowGap: '1rem',
  width: '100%',
});

export const themeListItemStyle = css({
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

export const themeTitleStyle = css({
  fontWeight: '500',
});
