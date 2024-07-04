import GiftThemes from '@constants/GiftThemes';
import Container from '@components/atoms/container/Container';
import Image from '@components/atoms/image/Image';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Paths from '@constants/Paths';
import { ThemeItemProps } from '@/types';

function ThemeItem({ themeKey }: ThemeItemProps) {
  const theme = GiftThemes[themeKey];

  return (
    <Link to={Paths.THEME_PAGE(themeKey)}>
      <Container padding="25px 35px 24px">
        <Container elementSize="full-width" flexDirection="column" alignItems="center">
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
    </Link>
  );
}

export default ThemeItem;
