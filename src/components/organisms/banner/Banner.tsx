import Container from '@components/atoms/container/Container';
import { backgroundColors } from '@styles/colors';
import GiftThemes from '@constants/GiftThemes';
import { GiftThemeKey } from '@/types';
import { ThemeName, ThemeSubtitle, ThemeTitle } from './Banner.styles';

interface BannerProps {
  themeKey: GiftThemeKey;
}

function Banner({ themeKey }: BannerProps) {
  const themeTexts = GiftThemes[themeKey];

  return (
    <Container backgroundColor={backgroundColors.containerDark} cssProps={{ padding: '50px 20px' }}>
      <Container maxWidth="1100px" flexDirection="column">
        <ThemeName>
          {themeTexts.keyword}
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
