import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '@/components/common/AuthContext';

const Loginpage: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Fake 로그인
    if (id && password) {
      setAuthToken(id);
      navigate(from, { replace: true });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Loginpage;
