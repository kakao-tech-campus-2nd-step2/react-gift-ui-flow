import { ThemeTitleType } from '@/types/themeType';

import { Image } from '@/components/ui/Image/Default';
import { Container } from '@/components/ui/Layout/Container';

import { themeListItemStyle, themeTitleStyle } from './styles';

type ThemeListItemProps = {
  theme: ThemeTitleType;
};

export const ThemeListItem = ({ theme }: ThemeListItemProps) => {
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      css={themeListItemStyle}
    >
      <Image
        src={theme.imageSrc}
        radius={1.8}
        ratio="square"
        alt={theme.themeTitle}
      />
      <div css={themeTitleStyle}>{theme.themeTitle}</div>
    </Container>
  );
};
