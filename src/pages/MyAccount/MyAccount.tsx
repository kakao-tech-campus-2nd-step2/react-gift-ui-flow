import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledDiv, StyledButton } from '@pages/MyAccount/MyAccountPage.styles';
import Button from '@components/Button/Button';
import { ROUTE_PATHS } from '../../constants';

const MyAccountPage = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem('id');

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.setItem('isLoggedIn', 'false');
    navigate(ROUTE_PATHS.ROOT);
  };

  return (
    <StyledDiv>
      {id}님 안녕하세요!
      <StyledButton>
        <Button theme="secondary" size="medium" onClick={handleLogout}>
          로그아웃
        </Button>
      </StyledButton>
    </StyledDiv>
  );
};

export default MyAccountPage;
