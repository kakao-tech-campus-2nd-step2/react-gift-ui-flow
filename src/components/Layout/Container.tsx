import React from 'react';
import { StyledContainer } from './Container.style';

interface ContainerProps {
  width?: string;
  maxWidth?: string;
  height?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  padding?: string;
  children: React.ReactNode;
}

const Container = ({
  width,
  maxWidth,
  height,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  children,
}: ContainerProps) => (
  <StyledContainer
    width={width}
    maxWidth={maxWidth}
    height={height}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    padding={padding}
  >
    {children}
  </StyledContainer>
);

export default Container;
