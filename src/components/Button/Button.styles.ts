import styled from '@emotion/styled';

type ThemeProps = 'default' | 'primary' | 'secondary';
type SizeProps = 'small' | 'medium' | 'large' | 'responsive';

const colors = {
  default: {
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(17, 17, 17)',
    border: '1px solid rgb(17, 17, 17)',
  },
  primary: {
    backgroundColor: 'rgb(254, 229, 0)',
    color: 'rgb(17, 17, 17)',
    border: 'none',
  },
  secondary: {
    backgroundColor: '#ffffe0',
    color: '#777777',
    border: 'none',
  },
};

const sizes = {
  small: {
    padding: '4px 8px',
    fontSize: '12px',
  },
  medium: {
    padding: '12px 16px',
    fontSize: '14px',
  },
  large: {
    padding: '20px 24px',
    fontSize: '16px',
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
  width: 100%;
  max-width: 480px;
  text-align: center;
  border-radius: 4px;
  ${({ theme }) => getThemeStyles(theme)}
  ${({ size }) => getSizeStyles(size)}
`;
