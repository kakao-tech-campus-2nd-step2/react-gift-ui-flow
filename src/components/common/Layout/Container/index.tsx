import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface ContainerProps {
  maxWidth?: string;
  children: ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
}

export default function Container({
  maxWidth,
  children,
  flexDirection,
  justifyContent,
  alignItems,
  ...rest
}: ContainerProps) {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  margin: 0 auto;
`;
