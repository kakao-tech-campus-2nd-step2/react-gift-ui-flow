import styled from '@emotion/styled';
import React from 'react';

import SelectFriend from './BodyComponents/SelectFriend';
import Theme from './BodyComponents/Theme';


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
    background: rgb(255, 255, 255);
    box-sizing: border-box;
    flex: 1;
  `;
  
  export default Body;
  