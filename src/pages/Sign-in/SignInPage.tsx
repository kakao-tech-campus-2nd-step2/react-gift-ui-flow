import styled from "@emotion/styled";
import { useState } from "react";

import { Button } from "@/components/common/Button";
import { UnderlineTextField } from "@/components/common/Form/Input/UnderlineTextField";

const SignInPage: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () =>{
    console.log(username);
    console.log(password);
    alert("Sign in!");
  }

  return(
    <SignInWrapper>
      <InputContainers>
      Kakao
      <UnderlineTextField 
            type="text"
            id="username"
            value={username}
            onChange = { (e) => setUsername(e.target.value)}
            placeholder="username"
          />
            <UnderlineTextField 
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        <SubmitButton>
          <Button 
            size="small"
            theme="kakao"
            type="submit"
            children="Sign In"
            onClick = {handleSignIn}
          />
        </SubmitButton>

      </InputContainers>
    </SignInWrapper>
  );
}

export default SignInPage;

const SignInWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const InputContainers = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25vw;
  max-width: 500px;
  height: 10vh;
  font-size: 25px;
  padding: 15px;
  border: 1px solid;
`;

const SubmitButton = styled.div`
  margin-top: 25px;
  width: 70%;
  height: 30%;
`