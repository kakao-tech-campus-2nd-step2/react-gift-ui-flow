import { css } from '@emotion/react';

import { colors } from '@/styles/theme';

const backgroundColor = {
  kakao: colors.yellow[100],
  skyblue: colors.blue[100],
};

const borderColor = {
  kakao: colors.yellow[200],
  skyblue: colors.blue[200],
};

export const calloutStyles = (
  theme: 'kakao' | 'skyblue',
  radius: number | 'circle'
) =>
  css({
    width: '1024px',
    backgroundColor: backgroundColor[theme],
    borderRadius: radius,
    border: `1px solid ${borderColor[theme]}`,
  });
