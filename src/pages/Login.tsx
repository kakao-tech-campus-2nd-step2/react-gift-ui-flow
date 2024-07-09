import styled from "@emotion/styled";
import { useState } from "react";
import { useLocation,useNavigate} from "react-router-dom";

import { Button } from "@/components/common/Button/index";
import { UnderlineTextField } from "@/components/common/Form/Input/UnderlineTextField";
import { useAuth } from "@/contexts/Authcontext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #c7c7c7;
  padding: 30px;
  width: 400px;
  height: 250px;
  margin-top: 20px;
`;

const ButtonStyle = styled(Button)`
  margin-top: 70px;
  height: 50px;
`;

const LoginTextStyle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const UnderlineTextFieldStyle = styled(UnderlineTextField)`
  margin-top: 20px;
  width: 100%;
`;

const Login = ({}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const { setAuthToken } = useAuth();

	const from = (location.state as { from?: Location })?.from?.pathname || "/";
	const handleClickLoginButton = () => {
		if (username && password) {
			setAuthToken(username);
			navigate(from, {replace: true});
		} else {
			alert('아이디와 비밀번호를 입력해주세요.');
		}
	}
  return (
    <Container>
      <LoginTextStyle>Kakao</LoginTextStyle>
      <LoginForm>
        <UnderlineTextFieldStyle 
		value={username}
		onChange={(e) => setUsername(e.target.value)}
		placeholder='이름'
		/>
        <UnderlineTextFieldStyle 
		type='password'
		value={password}
		onChange={(e) => setPassword(e.target.value)}
		placeholder='비밀번호'
		/>
        <ButtonStyle onClick={handleClickLoginButton}>로그인</ButtonStyle>
      </LoginForm>
    </Container>
  );
}

export default Login;
