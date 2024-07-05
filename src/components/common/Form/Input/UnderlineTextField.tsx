import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface IUnderlineTextField extends React.ComponentProps<'input'> {
  invalid?: boolean;
  variant?: 'small' | 'large' | 'responsive';
}

export const UnderlineTextField = ({ invalid = false, variant = 'responsive', ...rest }: IUnderlineTextField) => {
  return <StyleInput invalid={invalid} variant={variant} {...rest} />;
};

const sizeStyles = {
  small: css`
    font-size: 12px;
  `,
  large: css`
    font-size: 18px;
  `,
  responsive: css`
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 14px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  `,
};

const StyleInput = styled.input<Pick<IUnderlineTextField, 'invalid' | 'variant'>>`
  width: 100%;
  padding: 12px 0px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #ccc;
  border-color: ${(props) => (props.invalid ? '#ff4b4b' : '#ccc')};
  ${(props) => (props.variant ? sizeStyles[props.variant] : null)};
  &:focus {
    outline: none;
    border-bottom: 2px solid #000;
  }
`;
