import styled from '@emotion/styled';

type Props = {
  radius?: 'circle' | number;
  ratio?: 'square' | 'auto' | number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image = ({ ...props }: Props) => <Wrapper {...props} />;

const Wrapper = styled.img<Pick<Props, 'ratio' | 'radius'>>(
  {
    objectFit: 'cover',
    objectPosition: 'center',
  },
  ({ radius = 0 }) => {
    if (radius === 'circle') {
      return {
        borderRadius: '100%',
      };
    }

    if (typeof radius === 'number') {
      return {
        borderRadius: `${radius}px`,
      };
    }
  },
  ({ ratio = 'auto' }) => {
    if (ratio === 'square') {
      return {
        aspectRatio: '1',
        objectFit: 'cover',
      };
    }

    if (ratio === 'auto') {
      return {
        aspectRatio: 'auto',
        maxHeight: '50vh',
      };
    }

    if (typeof ratio === 'number') {
      return {
        aspectRatio: `${ratio}`,
      };
    }
  },
);
