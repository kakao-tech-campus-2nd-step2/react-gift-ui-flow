import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">PW:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
