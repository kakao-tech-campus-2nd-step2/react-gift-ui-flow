import { Button } from "@/components/common/Button";
import COLOR from "@/constants/color";
import { AuthContext } from "@/contexts/AuthContext";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FormEvent, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    login(username);

    navigate("/");
  };

  return (
    <StyledLogin>
      <h2>kakao</h2>
      <form onSubmit={handleSubmit}>
        <input ref={usernameRef} type="text" placeholder="이름" />
        <input ref={passwordRef} type="password" placeholder="비밀번호" />
        <div
          className={css`
            margin-top: 2rem;
          `}
        >
          <Button theme="kakao">로그인</Button>
        </div>
      </form>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: ${COLOR.WHITE};
    padding: 4rem;
    border: 1px solid #e0e0e0;
  }

  input {
    width: 30rem;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid ${COLOR.GRAY_300};
    font-size: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid ${COLOR.GRAY_300};
    &:focus {
      border-bottom: 1px solid ${COLOR.BLACK};
    }
  }
`;

export default Login;
