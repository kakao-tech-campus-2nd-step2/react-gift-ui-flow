import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { useHandleLogin } from '@/pages/LoginPage/handleLogin';
import { useLoginState } from '@/pages/LoginPage/useLoginState';

export function LoginPage() {
  const { id, setId, password, setPassword } = useLoginState();
  const handleLogin = useHandleLogin(id);

  return (
    <div>
      <h1>Login</h1>
      <div>
        <UnderlineTextField
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <UnderlineTextField
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={handleLogin} type="submit" theme="kakao" size="responsive">
        로그인
      </Button>
    </div>
  );
}

export default LoginPage;
