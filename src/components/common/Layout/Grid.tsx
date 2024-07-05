import { css } from '@emotion/react';
import styled from '@emotion/styled';
type ResponseGridStyle = {
  init: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};
export interface IGrid extends React.ComponentProps<'div'> {
  gap?: number;
  columns: number | ResponseGridStyle;
}

export const Grid = ({ gap, columns, children, ...rest }: IGrid) => {
  return (
    <GridContainer gap={gap} columns={columns} {...rest}>
      {children}
    </GridContainer>
  );
};
const columnStyles = (columns: ResponseGridStyle) => {
  const styles = Object.entries(columns).map(([breakpoint, value]) => {
    let minWidth;
    switch (breakpoint) {
      case 'init':
        minWidth = '0px';
        break;
      case 'xs':
        minWidth = '520px';
        break;
      case 'sm':
        minWidth = '768px';
        break;
      case 'md':
        minWidth = '1024px';
        break;
      case 'lg':
        minWidth = '1280px';
        break;
      default:
        return '';
    }

    return css`
      @media screen and (min-width: ${minWidth}) {
        grid-template-columns: repeat(${value}, 1fr);
      }
    `;
  });

  return styles;
};

const GridContainer = styled.div<Pick<IGrid, 'columns' | 'gap'>>`
  width: 100%;
  display: grid;
  ${(props) =>
    typeof props.columns === 'number'
      ? `grid-template-columns: repeat(${props.columns}, 1fr)`
      : columnStyles(props.columns)};
  gap: ${(props) => `${props.gap}px`};
  align-items: center;
`;
