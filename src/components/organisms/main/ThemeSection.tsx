import Grid from '@components/atoms/grid/Grid';
import Container from '@components/atoms/container/Container';
import ThemeItem from '@components/molecules/themeItem/ThemeItem';
import GiftThemes from '@constants/GiftThemes';
import { css } from '@emotion/react';

interface ThemeSectionProps {
  maxColumns: number,
  // minColumns: number,
}

function ThemeSection({ maxColumns }: ThemeSectionProps) {
  const themes = GiftThemes;

  return (
    <div css={css`
      padding: 45px 52px 23px;
    `}
    >
      <Container
        elementSize={{
          width: '100%',
          height: 'auto',
        }}
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
    </div>
  );
}

export default ThemeSection;
