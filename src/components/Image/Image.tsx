import React, { ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type Ratio = 'square' | number;
type Radius = 'circle' | number;

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: Ratio;
  radius?: Radius;
}

const StyledImage = styled.img<ImageProps>`
  width: 100%;
  height: auto;
  object-fit: 'cover';
  aspect-ratio: ${({ ratio }) => {
    if (ratio === 'square') return '1';
    return ratio;
  }};
  border-radius: ${({ radius }) => {
    if (radius === 'circle') return '50%';
    if (typeof radius === 'number') return `${radius}px`;
    return '0';
  }};
`;

const Image = (props: ImageProps) => <StyledImage {...props} />;

export default Image;
export {};
