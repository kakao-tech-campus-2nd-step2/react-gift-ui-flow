import { ImgHTMLAttributes } from 'react';

import { Radius, Ratio } from '@/types/uiTypes';

import { imageStyle } from './styles';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: Ratio;
  radius?: Radius;
  width?: string;
  src: string;
}

export const Image = ({
  ratio = 'auto',
  radius = 0,
  width = '100%',
  src,
  alt,
  ...props
}: ImageProps) => {
  return (
    <img
      css={imageStyle(ratio, radius, width)}
      alt={alt}
      src={src}
      {...props}
    />
  );
};
