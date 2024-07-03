/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

type ImageProps = {
  ratio: 'square' | string;
  radius: 'circle' | number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

function Image({ ratio, radius, ...rest }: ImageProps) {
  return (
    <img
      css={{
        borderRadius: radius === 'circle' ? '50%' : radius,
        width: '100%',
        aspectRatio: ratio === 'square' ? '1' : ratio,
        objectFit: 'cover',
      }}
      {...rest}
    />
  );
}

export default Image;
