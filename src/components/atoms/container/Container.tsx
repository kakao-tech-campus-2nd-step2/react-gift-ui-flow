import { CSSProperties, ReactNode } from 'react';
import { css, CSSObject } from '@emotion/react';
import { FixedSize } from '@/types';

interface ContainerProps {
  maxWidth?: string,
  elementSize?: FixedSize,
  flexDirection?: 'row' | 'column',
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch',
  children?: ReactNode,
  backgroundColor?: string;
  cssProps?: CSSProperties;
}

function Container({
  maxWidth, elementSize, flexDirection, justifyContent,
  alignItems, children, backgroundColor, cssProps,
}: ContainerProps) {
  const combinedStyles: CSSObject = {
    maxWidth,
    display: 'flex',
    width: elementSize ? elementSize.width : 'auto',
    height: elementSize ? elementSize.height : 'auto',
    flexDirection,
    justifyContent,
    alignItems,
    backgroundColor: backgroundColor || 'transparent',
    ...cssProps,
  };

  return (
    <div
      css={css(combinedStyles)}
    >
      {children}
    </div>
  );
}

export default Container;
