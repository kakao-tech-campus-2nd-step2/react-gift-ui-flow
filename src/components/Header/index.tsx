import { Container } from '@/components/common/layouts/Container';
import { GetTheme } from '@/components/Header/GetTheme';
import Nav from '@/components/Header/Nav';
import Title from '@/components/Header/Title';

interface HeaderProps {
  themeKey?: string;
}

const Header = ({ themeKey }: HeaderProps) => {
  const theme = themeKey ? GetTheme()[themeKey] : null;
  const backgroundColor = theme ? theme.backgroundColor : 'transparent';

  return (
    <header style={{ backgroundColor }}>
      <Container maxWidth="1200px">
        <Title themeKey={themeKey} />
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
