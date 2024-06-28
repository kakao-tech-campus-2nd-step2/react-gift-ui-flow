import 'reset-css';
import { ReactNode } from 'react';

interface GlobalStyleProps {
  children?: ReactNode;
}

function GlobalStyle({ children }: GlobalStyleProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default GlobalStyle;
