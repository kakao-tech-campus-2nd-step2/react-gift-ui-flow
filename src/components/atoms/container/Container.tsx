import { css, CSSObject } from '@emotion/react';
import { ContainerProps, ContainerSize, FixedSize } from '@/types';

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
  alignItems, children, backgroundColor, padding, cssProps,
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
    padding,
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
