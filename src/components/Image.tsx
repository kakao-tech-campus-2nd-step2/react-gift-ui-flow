import styled from '@emotion/styled';

export interface IImage extends React.ComponentProps<'img'> {
  radius: 'circle' | number;
  ratio: 'square' | 'auto' | number;
}

export const Image = ({ radius, ratio, ...rest }: IImage) => {
  return <StyleImg radius={radius} ratio={ratio} {...rest} />;
};

const StyleImg = styled.img<IImage>`
  border-radius: ${(props) => (props.radius === 'circle' ? '50%' : props.radius)};
  aspect-ratio: ${(props) => (props.ratio === 'square' ? '1 / 1' : props.ratio)};
`;
