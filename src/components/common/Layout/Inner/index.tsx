import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface InnerProps {
  maxWidth: number;
  children: ReactNode;
}

export default function Inner({ maxWidth, children, ...rest }: InnerProps) {
  return (
    <InnerContainer maxWidth={maxWidth} {...rest}>
      {children}
    </InnerContainer>
  );
}

const InnerContainer = styled.div<{ maxWidth: number }>`
  max-width: ${({ maxWidth }) => maxWidth}px;
  margin: 0 auto;
`;
