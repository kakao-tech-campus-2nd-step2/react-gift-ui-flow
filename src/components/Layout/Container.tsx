import React from 'react';
import { StyledContainer } from './Container.style';

interface ContainerProps {
  width?: string;
  maxWitdh?: string;
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
  maxWitdh,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  children,
}: ContainerProps) => (
  <StyledContainer
    width={width}
    maxWidth={maxWitdh}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    padding={padding}
  >
    {children}
  </StyledContainer>
);

export default Container;
