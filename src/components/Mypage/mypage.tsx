import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '@/components/Login/AuthContext';

export const Mypage = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <p>{user}님 안녕하세요!</p>
      <Link to="/">
        <button onClick={logout}>로그아웃</button>
      </Link>
    </div>
  );
};
