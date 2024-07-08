import { css } from '@emotion/react';

import { colors } from '@/styles/theme';
import { Radius } from '@/types/uiTypes';

const backgroundColor = {
  kakao: colors.yellow[100],
  skyblue: colors.blue[100],
};

const borderColor = {
  kakao: colors.yellow[200],
  skyblue: colors.blue[200],
};

const activeBackgroundColor = {
  kakao: colors.yellow[200],
  skyblue: colors.blue[400],
};

export const calloutStyles = (
  theme: 'kakao' | 'skyblue',
  radius: Radius,
  isActive: boolean
) =>
  css({
    flex: 1,
    maxWidth: '1024px',
    backgroundColor: isActive
      ? activeBackgroundColor[theme]
      : backgroundColor[theme],
    borderRadius: radius,
    border: `1px solid ${borderColor[theme]}`,
    transition: 'all 0.3s ease',
  });
