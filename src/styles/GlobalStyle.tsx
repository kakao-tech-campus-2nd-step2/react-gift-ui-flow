import 'reset-css';
import { css, Global } from '@emotion/react';
import { textColors } from '@styles/colors';

const baseStyle = css`
  a {
    text-decoration: none;
    color: ${textColors.default}
  }
  div {
    box-sizing: border-box;
  }
`;

function GlobalStyle() {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <Global styles={baseStyle} />;
}

export default GlobalStyle;
