import '@styles/login.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type LoginInfo = {
  name: string;
  password: string;
};

function Login() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    name: '',
    password: '',
  });
  const navigate = useNavigate();

  const validateForm = () => {
    return loginInfo.name != '' && loginInfo.password != '';
  };

  const login = () => {
    if (!validateForm()) {
      alert('이름과 비밀번호를 입력해주세요');
      return;
    } else {
      sessionStorage.setItem('authToken', loginInfo.name);
      navigate('/');
    }
  };

  return (
    <div className="login">
      <img
        className="login__title"
        src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
      />
      <div className="login__form">
        <input
          placeholder="이름"
          value={loginInfo.name}
          onChange={(e) => {
            setLoginInfo((prev: LoginInfo) => ({ ...prev, name: e.target.value }));
          }}
        />
        <input
          placeholder="비밀번호"
          value={loginInfo.password}
          type="password"
          onChange={(e) => {
            setLoginInfo((prev: LoginInfo) => ({ ...prev, password: e.target.value }));
          }}
        />
        <button className="login__button" onClick={login}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
