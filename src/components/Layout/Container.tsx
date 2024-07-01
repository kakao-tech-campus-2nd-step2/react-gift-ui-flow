import React from 'react';
import { StyledContainer } from './Container.style';

interface ContainerProps {
  maxWidth?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  maxWidth,
  flexDirection,
  justifyContent,
  alignItems,
  children,
}) => (
  <StyledContainer
    maxWidth={maxWidth}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </StyledContainer>
);

export default Container;
