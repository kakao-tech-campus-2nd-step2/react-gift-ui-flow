import styled from '@emotion/styled'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '@/components/AuthContext';
import { Button } from '@/components/common/Button/Button'

const LoginPage: React.FC = () => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  const handleLogin = () => {
    const { username, password } = formState;
    if (!username || !password) {
      alert('이름과 비밀번호를 입력해주세요.')
      return
    }
    // 로그인 성공시, authToken key 저장
    login(username)

    // 직전 페이지로 Redirect 되도록 useLocation 사용
    navigate(location.state?.from || '/')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <LoginWrapper>
      <LoginTitle>Kakao</LoginTitle>
      <LoginForm>
        <LoginInput name='username' placeholder='이름' value={formState.username} onChange={handleChange} />
        <LoginInput name='password' type='password' placeholder='비밀번호' value={formState.password} onChange={handleChange} />
        <LoginbtnWrapper>
          <Button theme={'kakao'} size={'responsive'} onClick={handleLogin}>
            로그인
          </Button>
        </LoginbtnWrapper>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.div`
  font-size: 24px;
  width: 100vw;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 24px;
`;

const LoginForm = styled.div`
  width: 100%;
  max-width: 580px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

const LoginInput = styled.input`
  outline: none;
  width: 100%;
  max-width: 473px;
  height: 46px;
  border-width: 0px 0px 2px;
  border-style: solid;
  transition: border-color 200ms ease 0s;
  margin-bottom: 16px;

  &:hover {
    color: rgb(25, 25, 25);
  }
`;

const LoginbtnWrapper = styled.div`
  width: 100%;
  max-width: 473px;
  margin-top: 44px;
`;
