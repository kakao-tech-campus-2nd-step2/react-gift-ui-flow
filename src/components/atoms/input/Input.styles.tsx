import styled from '@emotion/styled';
import { InputProps } from '@components/atoms/input/Input';

export const StyledInput = styled.input<InputProps>`
  width: ${({ elementSize }) => (typeof elementSize === 'string' ? 'auto' : elementSize.width)};
  height: ${({ elementSize }) => (typeof elementSize === 'string' ? 'auto' : elementSize.height)};
  border: none;
  border-bottom: #939393 3px solid;
  padding-left: 7px;
  transition: all 0.2s ease-in;

  &:focus {
    outline: none;
    border-bottom: #494949 3px solid;
  }
`;

export const StyledErrorMessage = styled.p`
  color: #ff4343;
  font-size: 12px;
  margin-top: 3px;
`;
