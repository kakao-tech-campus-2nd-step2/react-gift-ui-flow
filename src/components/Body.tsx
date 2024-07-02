import styled from '@emotion/styled';
import React from 'react';

import SelectFriend from './\bBodyComponents/SelectFriend';
import Theme from './\bBodyComponents/Theme';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <SelectFriend />
      <Theme />
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  margin-top: 59px;
  height: 1000px;
  background: rgb(250, 250, 250);
  box-sizing: border-box;
  flex: 1;
`;

export default Body;
