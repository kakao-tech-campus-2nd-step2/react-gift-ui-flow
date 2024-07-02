import { ReactNode } from 'react';
import { css } from '@emotion/react';

interface GridProps {
  gap?: number;
  columns?: number;
  children?: ReactNode;
}

function Grid({ gap, columns, children }: GridProps) {
  return (
    <div css={css`
    display: grid;
    gap: ${gap}px;
    grid-template-columns: repeat(${columns}, 1fr);
  `}
    >
      {children}
    </div>
  );
}

export default Grid;
