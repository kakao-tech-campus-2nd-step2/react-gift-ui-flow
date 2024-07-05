import '@styles/login.css';

function Login() {
  return (
    <div className="login">
      <img
        className="login__title"
        src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
      />
      <div className="login__form">
        <input placeholder="이름" />
        <input placeholder="비밀번호" />
        <button className="login__button">로그인</button>
      </div>
    </div>
  );
}

export default Login;
