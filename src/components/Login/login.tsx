import { useState } from 'react';

export const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>
        <img src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg" />
        <div>
          <form className="login-form">
            <label htmlFor="name">이름</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submit-button">
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
