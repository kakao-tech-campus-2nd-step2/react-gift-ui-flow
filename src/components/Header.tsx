const labels: { [key: string]: string } = {
  default: 'My Application',
  theme1: 'Theme 1 Application',
  theme2: 'Theme 2 Application',
};

const titles: { [key: string]: string } = {
  default: 'Welcome to My Application',
  theme1: 'Welcome to Theme 1',
  theme2: 'Welcome to Theme 2',
};

const descriptions: { [key: string]: string } = {
  default: 'This is the default theme.',
  theme1: 'This is theme 1.',
  theme2: 'This is theme 2.',
};

const backgroundColors: { [key: string]: string } = {
  default: '#ffffff',
  theme1: '#ffcccc',
  theme2: '#ccffcc',
};

const Header: React.FC<{ themeKey?: string }> = ({ themeKey = 'default' }) => {
  return (
    <header style={{ backgroundColor: backgroundColors[themeKey] }}>
      <h1>{labels[themeKey]}</h1>
      <h2>{titles[themeKey]}</h2>
      <p>{descriptions[themeKey]}</p>
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
