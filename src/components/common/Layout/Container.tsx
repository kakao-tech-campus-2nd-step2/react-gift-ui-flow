/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

type ContainerProps = {
  maxWidth?: string;
  children: React.ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
};

function Container({
  maxWidth = undefined,
  children = undefined,
  flexDirection = 'column',
  justifyContent = 'center',
  alignItems = 'center',
}: ContainerProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        max-width: ${maxWidth};
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
}

export default Container;
