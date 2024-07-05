import styled from "@emotion/styled";

import { breakpoints } from "@styles/index";

type ResponseGridStyle = {
    [key in keyof typeof breakpoints]?: number;
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

const Wrapper = styled.div<Pick<Props, "columns" | "gap">>(
    {
        width: "100%",
        display: "grid",
    },
    ({ gap }) => ({
        gap: gap ? `${gap}px` : "0",
    }),
    ({ columns }) => {
        if (typeof columns === "number") {
            return {
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            };
        }

        const breakpointKeys = Object.keys(columns) as (keyof typeof breakpoints)[];

        return breakpointKeys
            .map((breakpoint) => {
                const minWidth = breakpoints[breakpoint];
                const numColumns = columns[breakpoint];
                return `@media screen and (min-width: ${minWidth}px) { grid-template-columns: repeat(${numColumns}, 1fr); }`;
            })
            .join(" ");
    },
);
