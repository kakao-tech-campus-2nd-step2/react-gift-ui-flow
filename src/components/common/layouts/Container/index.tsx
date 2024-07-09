import styled from '@emotion/styled';
import { forwardRef } from 'react';

import { vars } from '@/styles';

type Props = {
    maxWidth?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<Props> = forwardRef(
    ({ children, maxWidth, ...props }: Props, ref: React.Ref<HTMLDivElement>) => {
        return (
            <Wrapper ref={ref} {...props}>
                <Inner className="inner" maxWidth={maxWidth}>
                    {children}
                </Inner>
            </Wrapper>
        );
    },
);

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div<Pick<Props, 'maxWidth'>>`
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth ?? vars.breakpoints.md};
`;
