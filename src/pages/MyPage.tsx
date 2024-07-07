import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Account from '../components/common/Login/Account';
import { useAuth } from '../components/common/Login/AuthContext';

const MyPageContainer = styled.section`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 54px;
  & > p {
    width: 100%;
    padding: 80px 0px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 36px;
  }
  & > button {
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 200ms ease 0s;
    height: 40px;
    font-size: 15px;
    color: rgb(255, 255, 255);
    background-color: rgb(68, 68, 68);

    &:hover {
      background-color: rgb(80, 80, 80);
    }

    &:focus {
      outline: none;
    }
  }
`;

function Mypage() {
  const navigate = useNavigate();
  const { logout, authToken } = useAuth();

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const username = authToken || '';

  return (
    <MyPageContainer>
      <Header />
      <Account handleLogout={handleLogout} name={username} />
      <Footer />
    </MyPageContainer>
  );
}

export default Mypage;
