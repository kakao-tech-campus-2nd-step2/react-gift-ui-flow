import styled from '@emotion/styled';
import React from 'react';

const Body: React.FC = () => {
  return <BodyContainer>test</BodyContainer>;
};

const BodyContainer = styled.div`
  margin-top: 59px;
  padding: 20px;
  height: 1000px;
  background: rgb(250, 250, 250);
  box-sizing: border-box;
`;

export default Body;
