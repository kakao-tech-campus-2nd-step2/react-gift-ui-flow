import styled from '@emotion/styled';

interface ResponsiveGridStyle {
  default: number;
  [key: string]: number;
}

interface GridProps {
  gap?: number;
  columns: number | ResponsiveGridStyle;
  alignItems?: string;
  justifyItems?: string;
}

const getColumns = (columns: number | ResponsiveGridStyle) => {
  if (typeof columns === 'number') {
    return `repeat(${columns}, 1fr)`;
  }

  let styles = `repeat(${columns.default}, 1fr)`;

  Object.keys(columns).forEach((breakpoint) => {
    if (breakpoint !== 'default') {
      styles += `@media (min-width: ${breakpoint}px) {
        grid-template-columns: repeat(${columns[breakpoint]}, 1fr);
      }`;
    }
  });

  return styles;
};

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-gap: ${({ gap }) => gap || 0}px;
  grid-template-columns: ${({ columns }) => getColumns(columns)};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-items: ${({ justifyItems }) => justifyItems || 'center'};
`;
