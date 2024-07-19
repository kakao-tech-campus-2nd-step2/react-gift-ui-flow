import { css } from '@emotion/react';

type GridProps = {
  className?: string;
  gap: number;
  columns: number | { initial: number; lg: number; md: number; sm: number };
  children: React.ReactNode;
};

function Grid({ className, gap = 0, columns = 6, children }: GridProps) {
  if (typeof columns === 'number') {
    return (
      <div
        className={className}
        css={css`
          width: 100%;
          display: grid;
          gap: ${gap}px;
          grid-template-columns: repeat(${columns}, 1fr);
        `}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      css={css`
        width: 100%;
        display: grid;
        gap: ${gap}px;
        grid-template-columns: repeat(${columns.initial}, 1fr);
        @media (min-width: 1025px) {
          grid-template-columns: repeat(${columns.lg}, 1fr);
        }
        @media (min-width: 601px) and (max-width: 1024px) {
          grid-template-columns: repeat(${columns.md}, 1fr);
        }
        @media (max-width: 600px) {
          grid-template-columns: repeat(${columns.sm}, 1fr);
        }
      `}
    >
      {children}
    </div>
  );
}

export default Grid;
