import { css } from '@emotion/react';

import { colors } from '@/styles/theme';

export const calloutStyle = css({
  padding: 'auto',
  fontSize: '1.4rem',
});

export const textStyle = (isActive: boolean) =>
  css({
    padding: '1rem 0',
    fontWeight: isActive ? '800' : '600',
    color: isActive ? `${colors.blue[400]}` : `${colors.blue[300]}`,
    transition: 'all 0.3s ease',
  });
