import styled from '@emotion/styled';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

export default Container;