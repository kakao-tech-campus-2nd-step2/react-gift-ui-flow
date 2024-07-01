import styled from '@emotion/styled';

type ThemeProps = 'default' | 'primary' | 'secondary';
type SizeProps = 'small' | 'medium' | 'large' | 'responsive';

// color variables
const colors = {
  default: {
    backgroundColor: '#ffff00',
    color: '#000',
  },
  primary: {
    backgroundColor: '#eee8aa',
    color: '#292929',
  },
  secondary: {
    backgroundColor: '#ffffe0',
    color: '#777777',
  },
};

// size variables
const sizes = {
  small: {
    padding: '4px 8px',
    fontSize: '12px',
  },
  medium: {
    padding: '8px 12px',
    fontSize: '16px',
  },
  large: {
    padding: '12px 16px',
    fontSize: '20px',
  },
  responsive: {
    padding: '8px 12px',
    fontSize: '16px',
    '@media (min-width: 576px)': {
      padding: '12px 16px',
      fontSize: '20px',
    },
  },
};

const getThemeStyles = (theme: ThemeProps) => colors[theme];

const getSizeStyles = (size: SizeProps) => sizes[size];

export const StyledButton = styled.button<{
  theme: ThemeProps;
  size: SizeProps;
}>`
  cursor: pointer;
  text-align: center;
  ${({ theme }) => getThemeStyles(theme)}
  ${({ size }) => getSizeStyles(size)}
`;
