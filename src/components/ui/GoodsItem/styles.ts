import { css } from '@emotion/react';

import { colors } from '@/styles/theme';

export const containerStyle = css({
  gap: '1rem',
  backgroundColor: colors.white,
});

export const detailContainerStyle = css({
  gap: '0.2rem',
});

export const titleStyle = css({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '0.9rem',
});

export const subtitleStyle = css({
  color: colors.gray[400],
  fontSize: '0.9rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const amountStyle = css({
  fontSize: '1.3rem',
  fontWeight: 'bold',
  wordBreak: 'break-all',
});
