import React from 'react';
import styled from '@emotion/styled';
import { InputField, Button } from '@components/common';
import useLoginForm from './useLoginForm';

export default function LoginForm() {
  const { userInfo, handleChange, handleSubmit } = useLoginForm();

  return (
    <FormContainer>
      <InputContainer>
        <InputField
          label="이름"
          labelFor="userName"
          placeholder="이름"
          type="text"
          name="userName"
          size="large"
          onChange={handleChange}
          value={userInfo.userName}
          srOnly
        />
      </InputContainer>
      <InputContainer>
        <InputField
          label="비밀번호"
          labelFor="userPassword"
          placeholder="비밀번호"
          type="password"
          name="userPassword"
          size="large"
          onChange={handleChange}
          value={userInfo.userPassword}
          srOnly
        />
      </InputContainer>
      <Button theme="kakao" size="large" onClick={handleSubmit}>
        로그인
      </Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  width: 580px;
  padding: 60px 52px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

const InputContainer = styled.div`
  margin-bottom: 28px;

  &:last-of-type {
    margin-bottom: 60px;
  }
`;
