import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/common/Button";
import { UnderlineTextField } from "@/components/common/Form/Input/UnderlineTextField";
import { breakpoints } from "@/styles/variants";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate("/");
    } else {
      alert("아이디와 비밀번호를 입력해주세요");
    }
  };

  return (
    <Wrapper>
      <StyledImg src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg" />
      <StyledArticle>
        <StyledInput
          placeholder="이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div style={{ height: "16px" }} />
        <StyledInput
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ height: "60px" }} />
        <StyledButton onClick={handleLogin}>로그인</StyledButton>
      </StyledArticle>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 88px;
  color: rgb(51, 51, 51);
`;

const StyledArticle = styled.article`
  box-sizing: border-box;
  padding: 60px 52px;
  max-width: 580px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 16px;
    max-width: 580px;
    width: 100%;
    border: 0;
  }
`;

const StyledInput = styled(UnderlineTextField)`
  min-height: 46px;
  font-size: 18px;
  line-height: 25px;
  padding: 10px 0px 8px;
  border-width: 0px 0px 2px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;
