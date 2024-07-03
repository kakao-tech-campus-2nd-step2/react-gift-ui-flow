import styled from '@emotion/styled';

type SizeProps = 'small' | 'large' | 'responsive';

const getSizeStyles = (inputSize: SizeProps) => {
  switch (inputSize) {
  case 'small':
    return `
  font-size: 12px;
  padding: 4px 8px;
  `;
  case 'large':
    return `
      font-size: 16px;
      padding: 8px 16px;
    `;
  case 'responsive':
    return `
      @media (max-width: 600px) {
        font-size: 12px;
        padding: 4px 8px;
      }
      @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 14px;
        padding: 6px 12px;
      }
      @media (min-width: 1025px) {
        font-size: 16px;
        padding: 8px 16px;
      }
      `;
  default:
    return '';
  }
};

export const StyledInput = styled.input<{
  inputSize: SizeProps;
  disabled?: boolean;
  invalid?: boolean;
}>`
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fff')};
  border: none;
  border-bottom: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};
  outline: none;
  width: 100%;
  ${({ inputSize }) => inputSize && getSizeStyles(inputSize)}

  &::placeholder {
    color: #aaa;
  }

  &:disabled {
    color: #a1a1a1;
    cursor: not-allowed;
  }
`;
