import styled from '@emotion/styled';
import { breakpoints } from '@/styles/variants';

type ResponseGridStyle = {
  [key in keyof typeof breakpoints]?: number;
};

type Props = {
  height: number | ResponseGridStyle;
  backgroundColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Spacing = ({ height, backgroundColor = 'inherit', ...props }: Props) => {
  return <Wrapper height={height} backgroundColor={backgroundColor} {...props} />;
};

const Wrapper = styled.div<Pick<Props, 'height' | 'backgroundColor'>>(
  {
    width: '100%',
  },
  ({ backgroundColor }) => ({ backgroundColor }),
  ({ height = 16 }) => {
    if (typeof height === 'number') {
      return {
        height: `${height}px`,
      };
    }

    const heightBreakpoints = Object.keys(height) as (keyof typeof breakpoints)[];
    return heightBreakpoints
      .map((breakpoint) => {
        return `@media screen and (min-width: ${breakpoints[breakpoint]}) { height: ${height[breakpoint]}px; }`;
      })
      .join(' ');
  }
);
