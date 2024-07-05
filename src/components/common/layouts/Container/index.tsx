import styled from '@emotion/styled';
import React from 'react';

type ContainerProps = {
  maxWidth?: string | number;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  children: React.ReactNode;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  max-width: ${(props) =>
    typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth || '1024px'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
`;

export const Container: React.FC<ContainerProps> = ({
  maxWidth,
  flexDirection,
  justifyContent,
  alignItems,
  children,
}) => {
  return (
    <Wrapper>
      <Inner
        className="inner"
        maxWidth={maxWidth}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {children}
      </Inner>
    </Wrapper>
  );
};
