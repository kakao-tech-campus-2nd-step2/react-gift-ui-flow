import '@styles/input.css';

interface InputProps {
  type?: 'text' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  disabled?: boolean;
}

export const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  size = 'medium',
  disabled = false,
  ...props
}: InputProps) => {
  const sizeClass = size === 'responsive' ? 'storybook-input--responsive' : `storybook-input--${size}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={['storybook-input', sizeClass].join(' ')}
      disabled={disabled}
      {...props}
    />
  );
};