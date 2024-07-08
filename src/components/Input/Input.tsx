import styled from '@emotion/styled';

interface InputProps {
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  disabled?: boolean;
  invalid?: boolean;
}

const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  size = 'medium',
  disabled = false,
  invalid = false,
  ...props
}: InputProps) => {
  const sizeClass = size === 'responsive' ? 'storybook-input--responsive' : `storybook-input--${size}`;
  const inputClassName = ['storybook-input', sizeClass, invalid ? 'storybook-input--invalid' : ''].join(' ');

  return (
    <div>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClassName}
        disabled={disabled}
        invalid={invalid}
        {...props}
      />
      {invalid && <ErrorMessage>잘못된 입력입니다.</ErrorMessage>}
    </div>
  );
};

const StyledInput = styled.input<{
  size?: 'small' | 'medium' | 'large' | 'responsive';
  disabled?: boolean;
  invalid?: boolean; 
}>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &.storybook-input--small {
    font-size: 0.75rem;
    padding: 0.25rem;
  }
  
  &.storybook-input--medium {
    font-size: 1rem;
    padding: 0.5rem;
  }
  
  &.storybook-input--large {
    font-size: 1.25rem;
    padding: 0.75rem;
  }
  
  &.storybook-input--responsive {
    @media (max-width: 600px) {
      font-size: 0.75rem;
      padding: 0.25rem;
    }
    @media (min-width: 601px) and (max-width: 900px) {
      font-size: 1rem;
      padding: 0.5rem;
    }
    @media (min-width: 901px) {
      font-size: 1.25rem;
      padding: 0.75rem;
    }
  }
  
  &:disabled {
    opacity: 0.6;
  }
  
  &.storybook-input--invalid {
    border-color: red;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  display: block;
`;

export default Input;