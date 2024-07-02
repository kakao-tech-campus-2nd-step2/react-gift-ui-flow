/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/** @jsxImportSource @emotion/react */

import "@styles/button.css";

type ButtonProps = {
  Theme: "apple" | "orange" | "mango" | "melon" | "peach";
  Size: "sm" | "md" | "lg" | "responsive";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ Theme, Size, ...rest }: ButtonProps) {
  return (
    <button className={`button button--${Theme} button--${Size}`} {...rest}>
      Click me
    </button>
  );
}

export default Button;
