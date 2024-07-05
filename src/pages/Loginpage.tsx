import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Loginpage: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //로그인 로직 구현하기. 지금은 아무 값 가능
    history.pushState('/my-accout');
  };
};

return (
  <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <inpu type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);

export default LoginPage;
