import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PATH from '@/components/constants';
import { useAuth } from '@/components/AuthContext';
import { useEffect, useState } from 'react';


export default function MyPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [userName, setUsername] = useState(sessionStorage.getItem('authToken'));

  useEffect(() => {
    setUsername(sessionStorage.getItem('authToken'));
  }, []);

  const handleLogoutButton = () => {
    // alert('logout');
    logout();
    navigate(PATH.MAINPAGE);
  };

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <MyPageContent>
          <h1>{userName}님 안녕하세요!</h1>
          <LogoutButton onClick={handleLogoutButton}>로그아웃</LogoutButton>
        </MyPageContent>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

const MyPageContent = styled.div`
  width: 100vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoutButton = styled.button`
  margin-top: 64px;
  width: 100%;
  max-width: 200px;
  height: 40px;
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 200ms ease 0s;
  border-radius: 4px;

  &hover {
    background-color: rgb(48, 48, 48);
  }
`;
