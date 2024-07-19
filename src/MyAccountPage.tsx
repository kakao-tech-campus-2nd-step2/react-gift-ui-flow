import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 30vh;
  padding: 150px;
`;

const Greeting = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const MyAccountPage: React.FC = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate(); // 네비게이션 함수를 가지고 와서

  const handleLogout = () => {
    logout();
    navigate('/'); // 메인 페이지로 Redirect
  };

  return (
    <Container>
      <Greeting>{`${username}님 안녕하세요!`}</Greeting>
      <Button onClick={handleLogout} theme="darkGray" size='small'>
        로그아웃
      </Button>
    </Container>
  );
};

export default MyAccountPage;
