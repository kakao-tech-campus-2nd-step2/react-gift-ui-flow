import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 88px;
    color: rgb(51, 51, 51);
  }
`;

const StyledLoginForm = styled.article`
  @media (min-width: 768px) {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 60px 52px;
  }

  width: 100%;
  max-width: 580px;
  box-sizing: border-box;

  & > div:nth-of-type(1) {
    width: 100%;
    height: 16px;
  }
  & > div:nth-of-type(2) {
    width: 100%;
    height: 60px;
  }
`;

const StyledInput = styled.input`
  min-height: 46px;
  font-size: 18px;
  line-height: 25px;
  padding: 10px 0px 8px;
  border-width: 0px 0px 2px;
  width: 100%;
  box-sizing: border-box;
  color: rgb(25, 25, 25);
  transition: border-color 200ms ease 0s;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  outline: none;

  &:focus {
    border-color: rgb(37, 37, 37);
  }

  @media (max-width: 768px) {
    min-height: 42px;
    font-size: 15px;
    line-height: 1.5;
    padding: 9px 0px;
  }
`;

const StyledButton = styled.button`
  height: 60px;
  font-size: 16px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  color: rgb(17, 17, 17);
  background-color: rgb(254, 229, 0);
  &:hover {
    background-color: rgb(250, 218, 10);
  }

  @media (max-width: 768px) {
    height: 40px;
    font-size: 15px;
  }
`;

const LoginForm = () => {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    password: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const userLogin = () => {
    if (userInfo.name === '' || userInfo.password === '') {
      alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      nav('/');
    }
  };

  return (
    <LoginFormContainer>
      <img
        src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
        alt="카카오 CI"
      />
      <StyledLoginForm>
        <StyledInput placeholder="이름" value={userInfo.name} name="name" onChange={handleInput} />
        <div />
        <StyledInput
          type="password"
          name="password"
          placeholder="비밀번호"
          value={userInfo.password}
          onChange={handleInput}
        />
        <div />
        <StyledButton onClick={userLogin}>로그인</StyledButton>
      </StyledLoginForm>
    </LoginFormContainer>
  );
};

export default LoginForm;
