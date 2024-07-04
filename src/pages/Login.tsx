import { Button } from "@/components/common/Button";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

const Login = () => {
  return (
    <StyledLogin>
      <h2>kakao</h2>
      <form>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="비밀번호" />
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
    background-color: #ffffff;
    padding: 4rem;
    border: 1px solid #e0e0e0;
  }

  input {
    width: 30rem;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid #e0e0e0;
    font-size: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    translate: 3s;
    &:focus {
      border-bottom: 1px solid #000000;
    }
  }
`;

export default Login;
