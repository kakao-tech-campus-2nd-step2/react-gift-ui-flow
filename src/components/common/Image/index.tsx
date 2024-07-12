import React, { ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type Ratio = number | 'square';
type Radius = number | 'circle';

export interface ImageProps extends ImgHTMLAttributes<HTMLDivElement> {
  ratio?: Ratio;
  radius?: Radius;
  src: string;
  width?: number;
  height?: number;
}

export default function Image({ ratio, radius, src, width, height, ...rest }: ImageProps) {
  return <StyledImageContainer {...{ ratio, radius, src, width, height }} {...rest} />;
}

const ratioStyles = (ratio?: Ratio) => {
  if (typeof ratio === 'number') {
    return `aspect-ratio: ${ratio};`;
  }

  if (ratio === 'square') {
    return 'aspect-ratio: 1 / 1;';
  }

  return '';
};

const radiusStyles = (radius?: Radius) => {
  if (typeof radius === 'number') {
    return `border-radius: ${radius}px;`;
  }

  if (radius === 'circle') {
    return 'border-radius: 50%;';
  }

  return '';
};

const StyledImageContainer = styled.div<ImageProps>`
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ ratio }) => ratioStyles(ratio)}
  ${({ radius }) => radiusStyles(radius)}
`;
