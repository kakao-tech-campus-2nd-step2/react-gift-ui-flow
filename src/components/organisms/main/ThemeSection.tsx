import Grid from '@components/atoms/grid/Grid';
import Container from '@components/atoms/container/Container';
import ThemeItem from '@components/molecules/themeItem/ThemeItem';
import GiftThemes from '@constants/GiftThemes';
import { MAX_CONTENT_WIDTH } from '@styles/size';

interface ThemeSectionProps {
  maxColumns: number,
  // minColumns: number,
}

function ThemeSection({ maxColumns }: ThemeSectionProps) {
  const themes = GiftThemes;

  return (
    <Container padding="45px 52px 23px" justifyContent="center">
      <Container
        elementSize="full-width"
        maxWidth={MAX_CONTENT_WIDTH}
        justifyContent="center"
      >
        <Grid columns={maxColumns} gap={0}>
          {Object.keys(themes).map((themeKey, i) => {
            const key = `$gift-theme-${i}`;

            return (
              <ThemeItem themeKey={themeKey} key={key} />
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
}

export default ThemeSection;
