import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@/context/useAuth';

const Nav: React.FC = () => {
  const { authToken } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        {authToken ? (
          <li>
            <Link to="/my-account">내 계정</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">로그인</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
