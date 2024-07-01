import { ImgHTMLAttributes } from 'react';

import { boxStyle, imageStyle, wrapperStyle } from './styles';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number | 'square';
  radius?: number | 'circle';
  width: string;
}

export const Image = ({
  ratio = 16 / 9,
  radius = 0,
  width,
  alt,
  ...props
}: ImageProps) => {
  return (
    <div css={boxStyle(width)}>
      <div css={wrapperStyle(ratio)}>
        <img css={imageStyle(radius)} alt={alt} {...props} />
      </div>
    </div>
  );
};
