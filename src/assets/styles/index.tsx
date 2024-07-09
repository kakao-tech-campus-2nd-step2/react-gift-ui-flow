import React from 'react';
import { Global, css } from '@emotion/react';
import commonStyles from '@assets/styles/global/commonStyles';
import resetStyles from '@assets/styles/global/resetStyles';

const globalStyles = css`
  ${resetStyles}
  ${commonStyles}
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
