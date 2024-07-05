import styled from '@emotion/styled';
import { ReactNode } from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

export default Container;