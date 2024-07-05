import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button/index';

const MyPage = () => {
  const navigate = useNavigate();
  const { authToken, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <MyPageContainer>
      <MyPageInnerBox>
        {authToken}님 안녕하세요!
        <div></div>
        <Button theme="darkGray" size="small" onClick={handleLogout}>
          로그아웃
        </Button>
      </MyPageInnerBox>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0 120px;
`;
const MyPageInnerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  div {
    height: 100px;
  }
  button {
    width: 200px;
  }
`;
