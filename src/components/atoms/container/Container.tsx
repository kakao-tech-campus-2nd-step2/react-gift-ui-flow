import { css, CSSObject } from '@emotion/react';
import { ContainerProps } from '@/types';
import { getSizeStyles } from '@/utils';

function Container({
  maxWidth, elementSize, flexDirection, justifyContent,
  alignItems, children, backgroundColor, padding, cssProps,
}: ContainerProps) {
  const containerSize = getSizeStyles(elementSize);
  const combinedStyles: CSSObject = {
    maxWidth,
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    backgroundColor: backgroundColor || 'transparent',
    padding,
    ...cssProps,
  };

  return (
    <div
      css={[css(containerSize), css(combinedStyles)]}
    >
      {children}
    </div>
  );
}

export default Container;
