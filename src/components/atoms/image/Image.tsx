import { ImgHTMLAttributes } from 'react';
import { css } from '@emotion/react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio: number | 'square',
  radius: number | 'circle',
}

function Image({ ratio, radius, ...rest }: ImageProps) {
  const ratioPadding = `${typeof ratio === 'number' ? `${(1 / ratio) * 100}%` : '100%'};`;
  return (
    <div css={css`
      position: relative;
      width: 100%;
      padding-top: ${ratioPadding};
    `}
    >
      <img
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: ${typeof radius === 'string' ? '100%' : `${radius}px`};
          object-fit: cover;
        `}
        {...rest}
      />
    </div>
  );
}

export default Image;