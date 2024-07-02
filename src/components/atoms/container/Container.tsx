import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { backgroundColors } from '@styles/colors';
import { FixedSize } from '@styles/size';

interface ContainerProps {
  maxWidth?: string,
  elementSize?: FixedSize,
  flexDirection?: 'row' | 'column',
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch',
  children?: ReactNode,
  backgroundColor?: string;
}

function Container({
  maxWidth, elementSize, flexDirection, justifyContent, alignItems, children, backgroundColor,
}: ContainerProps) {
  return (
    <div
      css={css`
        max-width: ${maxWidth};
        display: flex;
        width: ${elementSize ? elementSize.width : 'auto'};
        height: ${elementSize ? elementSize.height : 'auto'};
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        background-color: ${backgroundColor ?? backgroundColors.container};
      `}
    >
      {children}
    </div>
  );
}

export default Container;
