import React, { useContext } from 'react';
import { StyledDiv, StyledButton } from '@pages/MyAccount/MyAccountPage.styles';
import Button from '@components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { ROUTE_PATHS } from '../../constants';

const MyAccountPage = () => {
  const id = sessionStorage.getItem('authToken');
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
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
