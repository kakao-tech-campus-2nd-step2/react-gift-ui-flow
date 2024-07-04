import styled from '@emotion/styled';
import { forwardRef } from 'react';

import type { FlatFlexProps } from '@/components/atoms/FlatFlex';
import { FlatFlex } from '@/components/atoms/FlatFlex';

export const Container: React.FC<FlatFlexProps> = forwardRef(
  ({ children, ...props }: FlatFlexProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Wrapper ref={ref} {...props}>
        <FlatFlex {...props}>{children}</FlatFlex>
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
