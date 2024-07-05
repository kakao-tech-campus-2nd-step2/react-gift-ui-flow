import Nav from '@/components/Header/Nav';
import Title from '@/components/Header/Title';
import { themeConfig } from '@/components/ThemeConfig';

interface HeaderProps {
  themeKey?: string;
}

const Header = ({ themeKey }: HeaderProps) => {
  const backgroundColor = themeKey ? themeConfig[themeKey]?.backgroundColor : 'transparent';

  return (
    <header style={{ backgroundColor }}>
      <Title themeKey={themeKey} />
      <Nav />
    </header>
  );
};

export default Header;
