import styled from '@emotion/styled';

interface ButtonProps {
  primary?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large'| 'responsive';
  children: string;
  onClick?: () => void;
  theme?: 'Con' | 'Muji' | 'JayG';
}

const Button = ({
  primary = 'secondary',
  size = 'medium',
  backgroundColor = '',
  children,
  theme,
  ...props
}: ButtonProps) => {

const styleByTheme = {
  'Con': {
    primary: 'button--Con-primary',
    secondary: 'button--Con-secondary',
  },
  'Muji': {
    primary: 'button--Muji-primary',
    secondary: 'button--Muji-secondary',
  },
  'JayG': {
    primary: 'button--JayG-primary',
    secondary: 'button--JayG-secondary',
  },
};

const modeTheme = theme ? styleByTheme[theme][primary] : '';
const sizeClass = size === 'responsive' ? 'button--responsive' : `button--${size}`;

  return (
    <StyledButton
      type='button'
      className={['button', sizeClass, modeTheme].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  &.button--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &.button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  &.button--large {
    font-size: 16px;
    padding: 12px 24px;
  }

  @media (max-width: 600px) {
    &.button--responsive {
      font-size: 12px;
      padding: 8px 16px;
    }
  }

  @media (min-width: 601px) and (max-width: 1200px) {
    &.button--responsive {
      font-size: 24px;
      padding: 16px 32px;
    }
  }

  @media (min-width: 1201px) {
    &.button--responsive {
      font-size: 36px;
      padding: 24px 48px;
    }
  }

  &.button--Con-primary {
    background-color: green;
    color: white;
  }

  &.button--Con-secondary {
    background-color: lightgreen;
    color: darkgreen;
  }

  &.button--Muji-primary {
    background-color: yellow;
    color: black;
  }

  &.button--Muji-secondary {
    background-color: palegoldenrod;
    color: gray;
  }

  &.button--JayG-primary {
    background-color: chocolate;
    color: whitesmoke;
  }

  &.button--JayG-secondary {
    background-color: sandybrown;
    color: white;
  }
`;

export default Button;