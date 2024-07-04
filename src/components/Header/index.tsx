import { themeConfig } from '@/components/themeConfig';

interface HeaderProps {
  themeKey?: string;
}

const Header = ({ themeKey }: HeaderProps) => {
  const theme = themeKey ? themeConfig[themeKey] : null;

  return (
    <header style={{ backgroundColor: theme?.backgroundColor || 'transparent' }}>
      {theme ? (
        <>
          <h1>{theme.label}</h1>
          <h2>{theme.title}</h2>
          <p>{theme.description}</p>
        </>
      ) : (
        <h1>선물하기</h1>
      )}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
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
