import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { BREAK_POINTS } from '@assets/styles/theme/variants';

type MaxWidth = 'xs' | 'sm' | 'md' | 'lg';

export interface CenteredContainerProps {
  maxWidth: MaxWidth;
  children: ReactNode;
}

export default function CenteredContainer({ maxWidth, children, ...rest }: CenteredContainerProps) {
  return (
    <InnerContainer maxWidth={maxWidth} {...rest}>
      {children}
    </InnerContainer>
  );
}

const InnerContainer = styled.div<{ maxWidth: MaxWidth }>`
  max-width: ${({ maxWidth }) => BREAK_POINTS[maxWidth]}px;
  margin: 0 auto;
`;
