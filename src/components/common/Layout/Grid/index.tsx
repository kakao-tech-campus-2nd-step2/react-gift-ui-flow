import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ColumnConfig {
  initial: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export interface GridProps {
  gap: number;
  columns: number | ColumnConfig;
  children: ReactNode;
}

export default function Grid({ gap, columns, children, rest }: GridProps) {
  return (
    <StyledGrid gap={gap} columns={columns} {...rest}>
      {children}
    </StyledGrid>
  );
}

const generateGridTemplateColumns = (columns: number | ColumnConfig) => {
  if (typeof columns === 'number') {
    return css`
      grid-template-columns: repeat(${columns}, 1fr);
    `;
  }

  return css`
    grid-template-columns: repeat(${columns.initial}, 1fr);

    @media (min-width: 576px) {
      grid-template-columns: ${columns.sm ? `repeat(${columns.sm}, 1fr)` : `repeat(${columns.initial}, 1fr)`};
    }

    @media (min-width: 768px) {
      grid-template-columns: ${columns.md
        ? `repeat(${columns.md}, 1fr)`
        : `repeat(${columns.sm || columns.initial}, 1fr)`};
    }

    @media (min-width: 992px) {
      grid-template-columns: ${columns.lg
        ? `repeat(${columns.lg}, 1fr)`
        : `repeat(${columns.md || columns.sm || columns.initial}, 1fr)`};
    }
  `;
};

const StyledGrid = styled.div<{ gap: number; columns: number | ColumnConfig }>`
  display: grid;
  gap: ${({ gap }) => `${gap}px`};
  ${({ columns }) => generateGridTemplateColumns(columns)}
`;
