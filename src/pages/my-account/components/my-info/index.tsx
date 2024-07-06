import { PATHS } from '@/constants/path';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const MyInfo = () => {
  const userName = sessionStorage.getItem('authToken') || 'User';
  const navigate = useNavigate();

  const handlerLogout = () => {
    sessionStorage.removeItem('authToken');
    navigate(PATHS.MAIN);
  };
  return (
    <>
      {userName}님 안녕하세요!
      <S.BoxSpacer />
      <S.LogoutButton onClick={handlerLogout}>로그아웃</S.LogoutButton>
    </>
  );
};

export default MyInfo;
