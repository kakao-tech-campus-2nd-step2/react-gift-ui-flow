import { css } from '@emotion/react';

import { colors } from '@/styles/theme';
import { Radius, Ratio } from '@/types/uiTypes';

const getBorderRadius = (radius: Radius) => {
  if (radius === 'circle') return '50%';

  return `${radius}rem`;
};

const getAspectRatio = (ratio: Ratio) => {
  if (ratio === 'square') return '1/1';
  if (ratio === 'auto') return 'auto';
  return `${ratio}`;
};

export const imageStyle = (ratio: Ratio, radius: Radius, width: string) =>
  css({
    objectFit: 'cover',
    objectPosition: 'center',
    width,
    borderRadius: getBorderRadius(radius),
    aspectRatio: getAspectRatio(ratio),
  });

export const rankingWrapperStyle = css({
  position: 'relative',
  width: '100%',
  height: 'auto',
  display: 'inline-block',
});

export const rankingStyle = (rankingIndex: number) =>
  css({
    position: 'absolute',
    top: '0.25rem',
    left: '0.25rem',
    width: '1.5rem',
    height: '1.5rem',
    zIndex: 10,
    backgroundColor: rankingIndex <= 3 ? colors.pink : colors.gray[400],
    color: colors.white,
    borderRadius: '0.25rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  });
