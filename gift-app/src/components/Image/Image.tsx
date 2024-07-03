import styled from '@emotion/styled';

interface ImageProps {
  src: string;
  width?: string | number;
  ratio?: 'auto' | 'square' | string;
  radius?: 'circle' | number | string;
  alt?: string;
}

const Image = ({
  src,
  width,
  ratio = 'square',
  radius,
  alt = '',
  ...props
}: ImageProps) => {
  const style: React.CSSProperties = { width };

  if (typeof ratio === 'string') {
    if (ratio === 'auto') {
      style.aspectRatio = 'auto';
    } else if (ratio === 'square') {
      style.aspectRatio = '1 / 1';
    } else {
      const [widthRatio, heightRatio] = ratio.split('/');
      if (widthRatio && heightRatio) {
        style.aspectRatio = `${parseFloat(widthRatio)} / ${parseFloat(heightRatio)}`;
      }
    }
  }

  if (radius === 'circle') {
    style.borderRadius = '50%';
  } else if (typeof radius === 'string' && !Number.isNaN(Number(radius))) {
    style.borderRadius = `${Number(radius)}px`;
  } else if (typeof radius === 'number') {
    style.borderRadius = `${radius}px`;
  }

  return (
    <StyledImage
      src={src} style={style} alt={alt} {...props} /> 
  );
};

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export default Image;