import React from 'react';

const themeConfig: {
  [key: string]: { label: string; title: string; description: string; backgroundColor: string };
} = {
  default: {
    label: 'My Application',
    title: 'Welcome to My Application',
    description: 'This is the default theme.',
    backgroundColor: '#ffffff',
  },
  theme1: {
    label: 'Theme 1 Application',
    title: 'Welcome to Theme 1',
    description: 'This is theme 1.',
    backgroundColor: '#ffcccc',
  },
  theme2: {
    label: 'Theme 2 Application',
    title: 'Welcome to Theme 2',
    description: 'This is theme 2.',
    backgroundColor: '#ccffcc',
  },
};

interface HeaderProps {
  themeKey?: string;
}

const Header = ({ themeKey = 'default' }: HeaderProps) => {
  const theme = themeConfig[themeKey];

  return (
    <header style={{ backgroundColor: theme.backgroundColor }}>
      <h1>{theme.label}</h1>
      <h2>{theme.title}</h2>
      <p>{theme.description}</p>
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
