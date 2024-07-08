import { useIsLogin } from 'context/UserContext';
import { Link } from 'react-router-dom';

function Header() {
  const isLogin = useIsLogin();

  return (
    <div className="mainLayout__header__frame">
      <header className="mainLayout__header">
        <Link to="/">
          <p className="mainLayout__header__logo">선물하기</p>
        </Link>
        {isLogin ? (
          <Link to="/my-account">
            <p className="mainLayout__header__link">내 계정</p>
          </Link>
        ) : (
          <Link to="/login">
            <p className="mainLayout__header__link">로그인</p>
          </Link>
        )}
      </header>
    </div>
  );
}

export default Header;
