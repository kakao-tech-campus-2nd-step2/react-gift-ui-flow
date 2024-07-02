import { Image } from '@/components/ui/Image/Image';
import { Container } from '@/components/ui/Layout/Container';

import { themeListItemStyle, themeTitleStyle } from './styles';

type ThemeListItemProps = {
  imageSrc: string;
  themeTitle: string;
};

export const ThemeListItem = ({ imageSrc, themeTitle }: ThemeListItemProps) => {
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      css={themeListItemStyle}
    >
      <Image
        src={imageSrc}
        width="6rem"
        radius={30}
        ratio="square"
        alt={themeTitle}
      />
      <div css={themeTitleStyle}>{themeTitle}</div>
    </Container>
  );
};
