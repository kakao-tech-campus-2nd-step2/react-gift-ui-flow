import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/layouts/Container';

const ProfileContainer = styled(Container)`
  padding: 80px 0px 120px;
`;

const ProfileName = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;
`;

const LogoutButton = styled(Button)`
  margin: 20px auto;
  max-width: 200px;
  max-height: 40px;
  color: white;
  background-color: rgb(68, 68, 68);

  &:hover {
    background-color: rgb(85, 85, 85);
  }
`;

const MyAccount = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
      setUserName(authToken);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    navigate('/');
    window.location.reload(); // 임시
  };

  return (
    <ProfileContainer>
      <ProfileName>{`${userName}님 안녕하세요!`}</ProfileName>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </ProfileContainer>
  );
};

export default MyAccount;
