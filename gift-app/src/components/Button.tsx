import '@styles/button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large'| 'responsive';
  label: string; // button contents
  onClick?: () => void;
  theme?: 'Con' | 'Muji' | 'JayG';
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor = '',
  label,
  theme,
  ...props
}: ButtonProps) => {

  let themeType = '';
  switch (theme) {
    case 'Con':
      themeType = 'storybook-button--con';
      break;
    case 'Muji':
      themeType = 'storybook-button--muji';
      break;
    case 'JayG':
      themeType = 'storybook-button--jayg';
      break;
    default:
      themeType = '';
  }

  // mode 변수에서 결정한 primary prop의 값에 따라 CSS 적용
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const sizeClass = size === 'responsive' ? 'storybook-button--responsive' : `storybook-button--${size}`;
  return (
    <button
      type="button"
      className={['storybook-button', sizeClass, mode, themeType].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};