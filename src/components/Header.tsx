const Header: React.FC<{ themeKey?: string }> = ({ themeKey }) => {
  return (
    <header>
      <h1>My Application</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
