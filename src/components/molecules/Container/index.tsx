import styled from '@emotion/styled';
import { forwardRef } from 'react';

import type { Props } from '@/components/atoms/FlatFlex';
import { FlatFlex } from '@/components/atoms/FlatFlex';
import {
  ContainerAlignItemsType,
  ContainerDirectionType,
  ContainerJustifyContentType,
} from '@/components/atoms/FlatFlex/types';

export const Container: React.FC<Props> = forwardRef(
  (
    {
      children,
      maxWidth,
      flexDirection = ContainerDirectionType.row,
      alignItems = ContainerAlignItemsType.center,
      justifyContent = ContainerJustifyContentType.center,
      ...props
    }: Props,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <Wrapper ref={ref} {...props}>
        <FlatFlex
          className="inner"
          maxWidth={maxWidth}
          flexDirection={flexDirection}
          alignItems={alignItems}
          justifyContent={justifyContent}
        >
          {children}
        </FlatFlex>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
