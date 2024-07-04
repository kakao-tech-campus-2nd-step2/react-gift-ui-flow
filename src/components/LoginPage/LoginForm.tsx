import { useLoginForm } from '@/hooks/useLoginForm';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';

import { buttonStyle, formContainerStyle } from './styles';

export const LoginForm = () => {
  const { username, password, handleLogin, handleInputChange } = useLoginForm();

  return (
    <form onSubmit={handleLogin} css={formContainerStyle}>
      <Input
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        size="response"
        placeholder="이름"
      />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        size="response"
        placeholder="비밀번호"
      />
      <Button size="response" type="submit" width="30rem" css={buttonStyle}>
        로그인
      </Button>
    </form>
  );
};
