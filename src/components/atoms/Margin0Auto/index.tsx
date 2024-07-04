import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type MarginCenterProp = {
  children?: ReactNode;
};

export const Margin0Auto = ({ children }: MarginCenterProp) => {
  return <FloatDiv>{children}</FloatDiv>;
};

const FloatDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`;
