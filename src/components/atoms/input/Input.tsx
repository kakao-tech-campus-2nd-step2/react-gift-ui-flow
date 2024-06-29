import ElementSize from '@styles/size';
import { InputHTMLAttributes } from 'react';
import { StyledErrorMessage, StyledInput } from '@components/atoms/input/Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  elementSize: ElementSize,
  invalid?: boolean,
  errorMessage?: string,
}

function Input({
  disabled, invalid, elementSize, errorMessage, ...rest
}: InputProps) {
  return (
    <>
      <StyledInput
        elementSize={elementSize}
        disabled={disabled}
        {...rest}
      />
      {invalid
        ? (
          <StyledErrorMessage>
            {errorMessage ?? '잘못된 입력값입니다.'}
          </StyledErrorMessage>
        )
        : null}
    </>
  );
}

export default Input;
