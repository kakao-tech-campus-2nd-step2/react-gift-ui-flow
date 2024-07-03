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
import { vars } from '@/styles';

export type Props = {
  maxWidth?: string;
  flexDirection?: ContainerDirection;
  alignItems?: ContainerAlignItems;
  justifyContent?: ContainerJustifyContent;
} & React.HTMLAttributes<HTMLDivElement>;

export const FlatFlex = ({
  children,
  maxWidth,
  flexDirection = ContainerDirectionType.row,
  alignItems = ContainerAlignItemsType.center,
  justifyContent = ContainerJustifyContentType.center,
  ...args
}: Props) => {
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
  Pick<Props, 'maxWidth' | 'flexDirection' | 'justifyContent' | 'alignItems'>
>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ?? vars.breakpoints.md};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
