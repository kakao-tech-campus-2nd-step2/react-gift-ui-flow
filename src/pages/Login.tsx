import styled from "@emotion/styled";

import { Button } from "@/components/common/Button/index";
import { UnderlineTextField } from "@/components/common/Form/Input/UnderlineTextField";

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
  height: 300px;
  margin-top: 20px;
`;

const ButtonStyle = styled(Button)`
  margin-top: 100px;
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

const Login = () => {
  return (
    <Container>
      <LoginTextStyle>Kakao</LoginTextStyle>
      <LoginForm>
        <UnderlineTextFieldStyle placeholder="이름"/>
        <UnderlineTextFieldStyle placeholder="비밀번호"/>
        <ButtonStyle>로그인</ButtonStyle>
      </LoginForm>
    </Container>
  );
}

export default Login;
