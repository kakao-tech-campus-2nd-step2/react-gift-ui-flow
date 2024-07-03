import { ThemeListType } from '@/types/themeType';

import { Image } from '@/components/ui/Image/Image';
import { Container } from '@/components/ui/Layout/Container';

import { themeListItemStyle, themeTitleStyle } from './styles';

type ThemeListItemProps = {
  theme: ThemeListType;
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
        width="6rem"
        radius={30}
        ratio="square"
        alt={theme.themeTitle}
      />
      <div css={themeTitleStyle}>{theme.themeTitle}</div>
    </Container>
  );
};
