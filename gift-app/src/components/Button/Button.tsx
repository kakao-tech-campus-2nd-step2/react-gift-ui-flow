import styled from '@emotion/styled';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large'| 'responsive';
  label: string;
  onClick?: () => void;
  theme?: 'Con' | 'Muji' | 'JayG';
}

const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor = '',
  label,
  theme,
  ...props
}: ButtonProps) => {

const styleByTheme = {
  'Con': 'button--con',
  'Muji': 'button--muji',
  'JayG': 'button--jayg',
};

// mode 변수에서 결정한 primary prop의 값에 따라 CSS 적용
const mode = primary ? 'button--primary' : 'button--secondary';
const sizeClass = size === 'responsive' ? 'button--responsive' : `button--${size}`;
const themeClass = theme? styleByTheme[theme] : '';

  return (
    <StyledButton
      type='button'
      className={['button', sizeClass, mode, themeClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
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

  &.button--primary {
    color: white;
    background-color: #1ea7fd;
  }

  &.button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

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

  &.button--con {
    background-color: green !important;
    color: white !important;
  }

  &.button--muji {
    background-color: yellow !important;
    color: black !important;
  }

  &.button--jayg {
    background-color: brown !important;
    color: whitesmoke !important;
  }
`;

export default Button;