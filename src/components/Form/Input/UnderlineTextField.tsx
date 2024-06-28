import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface IUnderlineTextField extends Omit<React.ComponentProps<'input'>, 'size'> {
  invalid: boolean;
  size: 'small' | 'large' | 'responsive';
}

export const UnderlineTextField = ({ invalid = false, size = 'responsive', ...rest }: IUnderlineTextField) => {
  return <StyleInput {...rest} invalid={invalid} size={size} />;
};

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 5px 10px;
  `,
  large: css`
    font-size: 16px;
    padding: 10px 20px;
  `,
  responsive: css`
    font-size: 12px;
    padding: 8px 16px;

    @media (min-width: 600px) {
      font-size: 14px;
      padding: 10px 20px;
    }

    @media (min-width: 900px) {
      font-size: 16px;
      padding: 12px 24px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
      padding: 15px 30px;
    }
  `,
};

const StyleInput = styled.input<IUnderlineTextField>`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid black;
  border-color: ${(props) => (props.invalid ? 'red' : 'black')};
  ${(props) => sizeStyles[props.size]};
`;
