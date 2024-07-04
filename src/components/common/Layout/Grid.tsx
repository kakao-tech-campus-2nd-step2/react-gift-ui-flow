import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface IGrid extends React.ComponentProps<'div'> {
  gap?: number;
  columns: number | 'ResponseGridStyle';
}

export const Grid = ({ gap, columns, children, ...rest }: IGrid) => {
  return (
    <GridContainer gap={gap} columns={columns} {...rest}>
      {children}
    </GridContainer>
  );
};
const columnStyles = css`
  font-size: 12px;
  padding: 8px 16px;

  @media (min-width: 600px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (min-width: 900px) {
    font-size: 16px;
    padding: 12px 24px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    padding: 15px 30px;
  }
`;

const GridContainer = styled.div<Pick<IGrid, 'columns' | 'gap'>>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 'ResponseGridStyle' ? columnStyles : `repeat(${props.columns}, 1fr)`};
  gap: ${(props) => `${props.gap}px`};
  align-items: center;
`;
