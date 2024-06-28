import '@styles/grid.css';

interface GridProps {
  columns: number;
  gap: number;
  children: React.ReactNode;
}

export const Grid = ({ columns, gap, children }: GridProps) => {
  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: `${gap}px` }}>
      {children}
    </div>
  );
};