import { StyledErrorMessage, StyledInput } from '@components/atoms/input/Input.styles';
import { forwardRef } from 'react';
import { InputProps } from '@/types';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  elementSize, invalid, errorMessage, disabled, ...rest
}, ref) => (
  <>
    <StyledInput
      elementSize={elementSize}
      disabled={disabled}
      ref={ref}
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
));

export default Input;
