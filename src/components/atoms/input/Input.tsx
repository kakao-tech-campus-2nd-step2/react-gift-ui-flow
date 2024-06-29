import { StyledErrorMessage, StyledInput } from '@components/atoms/input/Input.styles';
import { InputProps } from '@/types';

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
