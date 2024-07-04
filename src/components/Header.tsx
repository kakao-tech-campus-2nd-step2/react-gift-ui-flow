const labels: { [key: string]: string } = {
  default: 'My Application',
  theme1: 'Theme 1 Application',
  theme2: 'Theme 2 Application',
};

const Header: React.FC<{ themeKey?: string }> = ({ themeKey = 'default' }) => {
  return (
    <header>
      <h1>{labels[themeKey]}</h1>
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
