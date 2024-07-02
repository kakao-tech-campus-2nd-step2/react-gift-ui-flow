import GiftThemes from '@constants/GiftThemes';
// import Paths from '@constants/Paths';
import Container from '@components/atoms/container/Container';
import Image from '@components/atoms/image/Image';
import { css } from '@emotion/react';
import { GiftThemeKey } from '@/types';

interface ThemeItemProps {
  themeKey: GiftThemeKey;
}

function ThemeItem({ themeKey }: ThemeItemProps) {
  // const href = Paths.THEME_PAGE(themeKey);
  const theme = GiftThemes[themeKey];

  return (
    <Container cssProps={{ padding: '25px 35px 24px' }}>
      <Container elementSize={{ width: '100%', height: 'auto' }} flexDirection="column" alignItems="center">
        <Image src={theme.themeImageSrc} ratio="square" radius={32} />
        <p css={css`
          font-size: 16px;
          padding-top: 7px;
        `}
        >
          {theme.keyword}
        </p>
      </Container>
    </Container>
  );
}

export default ThemeItem;
