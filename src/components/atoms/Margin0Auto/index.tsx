import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type MarginCenterProp = {
  children?: ReactNode;
  limitMaxWidth?: boolean;
};

export const Margin0Auto = ({ children, limitMaxWidth = false }: MarginCenterProp) => {
  return <Margin0AutoItem limitMaxWidth={limitMaxWidth}>{children}</Margin0AutoItem>;
};

const Margin0AutoItem = styled.div<Pick<MarginCenterProp, 'limitMaxWidth'>>`
  margin: 0 auto;
  max-width: ${({ limitMaxWidth }) => (limitMaxWidth ? '1024px' : '100%')};
`;
