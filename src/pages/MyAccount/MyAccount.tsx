import React from 'react';
import { StyledDiv, StyledButton } from '@pages/MyAccount/MyAccountPage.styles';
import Button from '@components/Button/Button';

const MyAccountPage = () => {
  const id = sessionStorage.getItem('authToken');

  return (
    <StyledDiv>
      {id}님 안녕하세요!
      <StyledButton>
        <Button theme="secondary" size="medium">
          로그아웃
        </Button>
      </StyledButton>
    </StyledDiv>
  );
};

export default MyAccountPage;
