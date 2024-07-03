import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mainLayout__header">
      <Link to="/">
        <p className="mainLayout__header__logo">선물하기</p>
      </Link>
      <Link to="/login">
        <p className="mainLayout__header__login">로그인</p>
      </Link>
    </header>
  );
}

export default Header;
