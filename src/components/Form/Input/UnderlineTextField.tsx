import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface IUnderlineTextField extends React.ComponentProps<'input'> {
  invalid?: boolean;
  variant: 'small' | 'large' | 'responsive';
}

export const UnderlineTextField = ({ invalid = false, variant = 'responsive', ...rest }: IUnderlineTextField) => {
  return <StyleInput invalid={invalid} variant={variant} {...rest} />;
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

const StyleInput = styled.input<Pick<IUnderlineTextField, 'invalid' | 'variant'>>`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid black;
  border-color: ${(props) => (props.invalid ? 'red' : 'black')};
  ${(props) => sizeStyles[props.variant]};
`;
