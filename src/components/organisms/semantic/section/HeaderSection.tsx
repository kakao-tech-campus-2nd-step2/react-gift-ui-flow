import Container from '@components/atoms/container/Container';
import { backgroundColors } from '@styles/colors';
import { ThemeName, ThemeSubtitle, ThemeTitle } from './HeaderSection.styles';
import { GiftThemes } from '@/constants';

type GiftThemeKey = keyof typeof GiftThemes;

interface HeaderSectionProps {
  themeKey: GiftThemeKey;
}

function HeaderSection({ themeKey }: HeaderSectionProps) {
  const themeTexts = GiftThemes[themeKey];

  return (
    <Container backgroundColor={backgroundColors.containerDark} cssProps={{ padding: '50px 20px' }}>
      <Container maxWidth="1100px" flexDirection="column">
        <ThemeName>
          {themeKey}
        </ThemeName>
        <ThemeTitle>
          {themeTexts.title}
        </ThemeTitle>
        <ThemeSubtitle>
          {themeTexts.subtitle}
        </ThemeSubtitle>
      </Container>
    </Container>
  );
}

export default HeaderSection;
