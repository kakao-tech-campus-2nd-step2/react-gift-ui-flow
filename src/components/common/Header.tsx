const Header: React.FC = () => {
  return (
    <header>
      <h1>Gift Shop</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login"></a>
          </li>
          <li>
            <a href="/my-account">My Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
