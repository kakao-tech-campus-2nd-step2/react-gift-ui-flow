import styled from '@emotion/styled';

import { vars } from '@/styles';

type ResponseGridStyle = {
  [key in keyof typeof vars.breakpoints]?: number;
};

type Props = {
  columns: number | ResponseGridStyle;
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Grid: React.FC<Props> = ({ children, columns, ...props }: Props) => {
  return (
    <Wrapper columns={columns} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Pick<Props, 'columns' | 'gap'>>(
  {
    width: '100%',
    display: 'grid',
  },
  ({ gap }) => ({
    gap: gap ? `${gap}px` : '0',
  }),
  ({ columns }) => {
    if (typeof columns === 'number') {
      return {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      };
    }

    const breakpoints = Object.keys(columns) as (keyof typeof vars.breakpoints)[];
    return breakpoints
      .map((breakpoint) => {
        return `@media screen and (min-width: ${vars.breakpoints[breakpoint]}) { grid-template-columns: repeat(${columns[breakpoint]}, 1fr); }`;
      })
      .join(' ');
  },
);
