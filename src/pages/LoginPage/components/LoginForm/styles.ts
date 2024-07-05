import { css } from '@emotion/react';

import { colors } from '@/styles/theme';

export const formContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  border: 'none',
  padding: '4rem 3rem',
  '@media (min-width: 768px)': {
    border: `0.1rem solid ${colors.gray[200]}`,
  },
});

export const buttonStyle = css({
  marginTop: '3.5rem',
});
