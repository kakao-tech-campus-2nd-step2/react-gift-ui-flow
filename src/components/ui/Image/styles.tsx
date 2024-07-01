import { css } from '@emotion/react';

import { IMAGE_CIRCLE_RADIUS } from '@/constants/styles';
import { colors } from '@/styles/theme';

const getRatioPadding = (ratio: number | 'square'): string => {
  if (ratio === 'square') {
    return '100%';
  }
  return `${(1 / ratio) * 100}%`;
};

const getBorderRadius = (radius: number | 'circle'): string => {
  if (radius === 'circle') {
    return IMAGE_CIRCLE_RADIUS;
  }
  return `${radius}px`;
};

export const boxStyle = (boxWidth: string) =>
  css({
    width: boxWidth,
    height: 'auto',
  });

export const wrapperStyle = (ratio?: number | 'square') =>
  css({
    position: 'relative',
    width: '100%',
    paddingTop: ratio ? getRatioPadding(ratio) : 'auto',
    overflow: 'hidden',
  });

export const imageStyle = (radius?: number | 'circle') =>
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: radius !== undefined ? getBorderRadius(radius) : '0',
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
