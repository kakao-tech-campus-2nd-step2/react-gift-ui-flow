import styled from '@emotion/styled';

import type {
  ContainerAlignItems,
  ContainerDirection,
  ContainerJustifyContent,
} from '@/components/atoms/FlatFlex/types';
import {
  ContainerAlignItemsType,
  ContainerDirectionType,
  ContainerJustifyContentType,
} from '@/components/atoms/FlatFlex/types';

export type FlatFlexProps = {
  maxWidth?: string;
  flexDirection?: ContainerDirection;
  alignItems?: ContainerAlignItems;
  justifyContent?: ContainerJustifyContent;
  backgroundColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const FlatFlex = ({
  children,
  maxWidth = '100%',
  flexDirection = ContainerDirectionType.row,
  alignItems = ContainerAlignItemsType.center,
  justifyContent = ContainerJustifyContentType.center,
  ...args
}: FlatFlexProps) => {
  return (
    <Inner
      maxWidth={maxWidth}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...args}
    >
      {children}
    </Inner>
  );
};

const Inner = styled.div<
  Pick<
    FlatFlexProps,
    'maxWidth' | 'flexDirection' | 'justifyContent' | 'alignItems' | 'backgroundColor'
  >
>`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ backgroundColor }) => backgroundColor};
  max-width: ${({ maxWidth }) => maxWidth};
`;
