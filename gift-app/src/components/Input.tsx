import '@styles/input.css';

interface InputProps {
  type?: 'text' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  disabled?: boolean;
  invalid?: boolean;
}

export const Input = ({
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
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClassName}
        disabled={disabled}
        {...props}
      />
      {invalid && <p className="error-message error-message--invalid">잘못된 입력입니다.</p>}
    </div>
  );
};