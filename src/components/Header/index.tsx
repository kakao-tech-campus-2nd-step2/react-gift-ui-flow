import { Container } from '@/components/common/layouts/Container';
import Nav from '@/components/Header/Nav';
import { themes } from '@/components/Header/themes';
import Title from '@/components/Header/Title';

interface HeaderProps {
  themeKey?: string;
}

const Header = ({ themeKey }: HeaderProps) => {
  const theme = themeKey ? themes[themeKey] : null;
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
