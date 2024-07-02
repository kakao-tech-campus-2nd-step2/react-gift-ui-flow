import { HTMLAttributes, ReactNode } from 'react';

import { AlignItems, FlexDirection, JustifyContent } from '@/types/uiTypes';

import { containerStyle } from './styles';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: string;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: string;
}

export const Container = ({
  children,
  maxWidth,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  ...rest
}: ContainerProps) => {
  return (
    <div
      css={containerStyle(
        maxWidth,
        flexDirection,
        justifyContent,
        alignItems,
        gap
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
