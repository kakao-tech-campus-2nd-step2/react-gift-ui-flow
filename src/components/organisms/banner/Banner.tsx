import Container from '@components/atoms/container/Container';
import { backgroundColors } from '@styles/colors';
import GiftThemes from '@constants/GiftThemes';
import { MAX_CONTENT_WIDTH } from '@styles/size';
import { GiftThemeKey } from '@/types';
import { ThemeName, ThemeSubtitle, ThemeTitle } from './Banner.styles';

interface BannerProps {
  themeKey: GiftThemeKey;
}

function Banner({ themeKey }: BannerProps) {
  const themeTexts = GiftThemes[themeKey];

  return (
    <Container backgroundColor={backgroundColors.containerDark} elementSize="full-width" justifyContent="center">
      <Container maxWidth={MAX_CONTENT_WIDTH} elementSize="full-width" padding="50px 20px">
        <Container flexDirection="column">
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
    </Container>
  );
}

export default Banner;
