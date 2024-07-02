import Container from '@components/atoms/container/Container';
import { backgroundColors } from '@styles/colors';
import GiftThemes from '@constants/GiftThemes';
import { ThemeName, ThemeSubtitle, ThemeTitle } from './Banner.styles';

type GiftThemeKey = keyof typeof GiftThemes;

interface BannerProps {
  themeKey: GiftThemeKey;
}

function Banner({ themeKey }: BannerProps) {
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

export default Banner;
