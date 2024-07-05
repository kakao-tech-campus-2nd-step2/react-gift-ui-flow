import { getTheme } from '@/components/Header/GetTheme';
import Nav from '@/components/Header/Nav';
import Title from '@/components/Header/Title';

interface HeaderProps {
  themeKey?: string;
}

const Header = ({ themeKey }: HeaderProps) => {
  const theme = themeKey ? getTheme()[themeKey] : null;
  const backgroundColor = theme ? theme.backgroundColor : 'transparent';

  return (
    <header style={{ backgroundColor }}>
      <Title themeKey={themeKey} />
      <Nav />
    </header>
  );
};

export default Header;
