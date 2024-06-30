import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface IGrid {
  gap?: number;
  children: React.ReactNode;
  columns: number | 'ResponseGridStyle';
}

export const Grid = ({ gap, columns, children }: IGrid) => {
  return (
    <GridContainer gap={gap} columns={columns}>
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

const GridContainer = styled.div<IGrid>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 'ResponseGridStyle' ? columnStyles : `repeat(${props.columns}, 1fr)`};
  gap: ${(props) => `${props.gap}px`};
  align-items: center;
`;
