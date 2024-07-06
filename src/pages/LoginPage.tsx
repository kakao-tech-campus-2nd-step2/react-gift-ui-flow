import { Image } from '@/components/common/Image';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { BodyWrapper } from './MainPage';
import { Button } from '@/components/common/Button';
import styled from '@emotion/styled';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '@/providers/AuthProvider';

const LoginPage = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const { handleUser } = useUserInfo();
  const navigate = useNavigate();

  const handleLink = () => {
    navigate(-1);
  };

  const handleSave = () => {
    sessionStorage.setItem('authToken', inputValue1);
    handleUser('login');
  };

  const handleClicks = () => {
    if (!inputValue1 || !inputValue2) {
      alert('이름, 비밀번호를 모두 입력하세요');
      return;
    }
    handleLink();
    handleSave();
  };

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  return (
    <BodyPlusWrapper>
      <Image src="/images/kakao_logo.svg" width={100} height={100}></Image>
      <Border>
        <UnderlineTextField placeholder="이름" value={inputValue1} onChange={handleChange1} />
        <UnderlineTextField placeholder="비밀번호" value={inputValue2} onChange={handleChange2} />
        <Button theme="kakao" size="large" onClick={handleClicks}>
          로그인
        </Button>
      </Border>
    </BodyPlusWrapper>
  );
};

export default LoginPage;

const BodyPlusWrapper = styled(BodyWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  gap: 20px;
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 50px;
  gap: 40px;

  @media (min-width: 768px) {
    border: 1px solid lightgray;
  }
`;
