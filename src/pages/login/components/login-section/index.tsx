import { Button } from '@/components/common/Button';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/constants/path';
import { useState } from 'react';

const LoginSection = () => {
  const [userId, setUserId] = useState<string>('');
  const navigate = useNavigate();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handlerLogin = () => {
    sessionStorage.setItem('authToken', userId);
    navigate(PATHS.MAIN);
  };
  return (
    <S.SectionLayout>
      <S.LoginInput placeholder="이름" value={userId} onChange={handlerChange} type="text" />
      <S.InputSpacer />
      <S.LoginInput placeholder="비밀번호" type="password" />
      <S.ButtonSpacer />
      <Button onClick={handlerLogin}>로그인</Button>
    </S.SectionLayout>
  );
};

export default LoginSection;
