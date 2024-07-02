import { CSSProperties, ReactNode } from 'react';
import { css, CSSObject } from '@emotion/react';
import { ContainerSize, FixedSize } from '@/types';

interface ContainerProps {
  maxWidth?: string,
  elementSize?: ContainerSize,
  flexDirection?: 'row' | 'column',
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch',
  children?: ReactNode,
  backgroundColor?: string;
  cssProps?: CSSProperties;
}

function getFixedSize(size: ContainerSize | undefined): FixedSize {
  if (!size) {
    return {
      width: 'auto',
      height: 'auto',
    };
  }

  if (typeof size === 'object') {
    return size;
  }

  return {
    width: '100%',
    height: 'auto',
  };
}

function Container({
  maxWidth, elementSize, flexDirection, justifyContent,
  alignItems, children, backgroundColor, cssProps,
}: ContainerProps) {
  const fixedSize = getFixedSize(elementSize);
  const combinedStyles: CSSObject = {
    maxWidth,
    display: 'flex',
    width: fixedSize.width,
    height: fixedSize.height,
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
