import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type MarginCenterProp = {
  children?: ReactNode;
  limitMaxWidth?: boolean;
};

export const Margin0Auto = ({ children, limitMaxWidth = false }: MarginCenterProp) => {
  return <Margin0AutoedItem limitMaxWidth={limitMaxWidth}>{children}</Margin0AutoedItem>;
};

const Margin0AutoedItem = styled.div<Pick<MarginCenterProp, 'limitMaxWidth'>>`
  margin: 0 auto;
  max-width: ${({ limitMaxWidth }) => (limitMaxWidth ? '1024px' : '100%')};
`;
