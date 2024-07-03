import React from 'react';
import { StyledInput } from './Input.styles';

type SizeProps = 'small' | 'large' | 'responsive';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  invalid?: boolean;
  inputSize: SizeProps;
}

const Input = ({
  disabled,
  invalid,
  inputSize = 'large',
  ...props
}: InputProps) => (
  <StyledInput
    disabled={disabled}
    invalid={invalid}
    inputSize={inputSize}
    {...props}
  />
);

export default Input;
