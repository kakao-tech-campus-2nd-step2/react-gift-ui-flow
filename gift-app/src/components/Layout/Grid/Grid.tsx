import styled from '@emotion/styled';

interface GridProps {
  columns: number;
  gap: number;
  children: React.ReactNode;
}

const Grid = ({ columns, gap, children }: GridProps) => {
  return (
    <StyledGrid columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
};

const StyledGrid = styled.div<{ columns: number; gap: number }>`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: ${({ gap }) => `${gap}px`};

  & .grid-item {
    text-align: center;
    font-size: 14px;
  }
`;

export default Grid;