import HeaderNav from '@/components/Header/HeaderNav';
import HeaderTitle from '@/components/Header/HeaderTitle';
import { themeConfig } from '@/components/themeConfig';

interface HeaderProps {
  themeKey?: string;
}

const Header = ({ themeKey }: HeaderProps) => {
  return (
    <header
      style={{ backgroundColor: themeKey ? themeConfig[themeKey]?.backgroundColor : 'transparent' }}
    >
      <HeaderTitle themeKey={themeKey} />
      <HeaderNav />
    </header>
  );
};

export default Header;
