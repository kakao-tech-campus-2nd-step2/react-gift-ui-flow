import Layout from 'Layout/Layout';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/LoginContext';

const MyAccount = () => {
  const { username, logout } = useLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Layout>
      <AccountContainer>
        <Greeting>{username}님 안녕하세요!</Greeting>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </AccountContainer>
    </Layout>
  );
};

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Greeting = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #555;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;

export default MyAccount;