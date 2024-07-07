import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button/index';
import { useAuth } from '@/contexts/AuthContext';

const NameMargin = styled.div`
  width: 100%;
  height: 64px;
`;

const BtnWrapper = styled.div`
  width: 200px;
`;

const MyPageBox = () => {
  const { userId, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {userId}님 안녕하세요!
      <NameMargin />
      <BtnWrapper>
        <Button theme="darkGray" size="small" onClick={handleLogoutClick}>
          로그아웃
        </Button>
      </BtnWrapper>
    </>
  );
};

export default MyPageBox;
