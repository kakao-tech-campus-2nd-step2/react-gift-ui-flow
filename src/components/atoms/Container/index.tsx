import styled from '@emotion/styled';
import { forwardRef } from 'react';

import { vars } from '@/styles';

type Props = {
  maxWidth?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<Props> = forwardRef(
  (
    {
      children,
      maxWidth,
      flexDirection = 'row',
      alignItems = 'center',
      justifyContent = 'center',
      ...props
    }: Props,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <Wrapper ref={ref} {...props}>
        <Inner
          className="inner"
          maxWidth={maxWidth}
          flexDirection={flexDirection}
          alignItems={alignItems}
          justifyContent={justifyContent}
        >
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

const Inner = styled.div<
  Pick<Props, 'maxWidth' | 'flexDirection' | 'justifyContent' | 'alignItems'>
>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ?? vars.breakpoints.md};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
