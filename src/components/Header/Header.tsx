import './Header.css';

import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="/">선물하기</a>
          </li>
          {isAuthenticated ? (
            <li>
              <Link to="/my-account">내 계정</Link>
            </li>
          ) : (
            <li>
              <a href="/login">로그인</a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
