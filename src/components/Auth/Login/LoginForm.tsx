import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { useAuthContext } from '@/hooks/useAuthContext';

const LoginForm = () => {
  const { login } = useAuthContext();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    login(id);
  };

  return (
    <FormWrapper>
      <UnderlineTextField
        type="text"
        placeholder="이름"
        name="id"
        value={id}
        onChange={handleInputChange}
      />
      <Space />
      <UnderlineTextField
        type="password"
        placeholder="비밀번호"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <OtherSpace />
      <Button onClick={handleLogin}>로그인</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.div({
  width: '100%',
  maxWidth: '580px',
  padding: '16px',
});

const Space = styled.div({
  width: '100%',
  height: '16px',
  backgroundColor: 'inherit',
});

const OtherSpace = styled.div({
  height: '40px',
  '@media screen and (min-width: 600px)': {
    height: '60px',
  },
});

export default LoginForm;
