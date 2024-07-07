import styled from '@emotion/styled';
import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: 'auto' | 'square' | number;
  radius?: 'circle' | number;
  width?: string;
  src: string;
  alt: string;
}

const getBorderRadius = (radius: 'circle' | number) => {
  if (radius === 'circle')
    return '50%';
  return `${radius}px`;
};

const getAspectRatio = (ratio: 'auto' | 'square' | number) => {
  if (ratio === 'square')
    return '1/1';
  if (ratio === 'auto')
    return 'auto';
  return `${ratio}`;
};

const Image = ({
  ratio = 'auto',
  radius = 0,
  width = '100%',
  src,
  alt = '',
  ...props
}: ImageProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      ratio={ratio}
      radius={radius}
      {...props}
    />
  );
};

const StyledImage = styled.img<{ width: string; ratio: 'auto' | 'square' | number; radius: 'circle' | number }>`
  display: block;
  width: ${({ width }) => `${width}px`}; // width를 픽셀 값으로 설정
  object-fit: cover;
  object-position: center;
  aspect-ratio: ${({ ratio }) => getAspectRatio(ratio)};
  border-radius: ${({ radius }) => getBorderRadius(radius)};
`;

export default Image;