import { ThemeHeaderType } from '@/types/themeType';

import { Content } from '@/components/ui/Layout/Content';

import { textStyle, themeHeaderStyle } from './styles';

type ThemeHeaderProps = {
  contents: ThemeHeaderType;
};

export const ThemeHeader = ({ contents }: ThemeHeaderProps) => {
  return (
    <Content
      backgroundColor={contents.color}
      flexDirection="column"
      gap="0.5rem"
      css={themeHeaderStyle}
    >
      <p css={textStyle('title')}>{contents.themeTitle}</p>
      <h2 css={textStyle('subTitle')}>{contents.subTitle}</h2>
      <p css={textStyle('description')}>{contents.description}</p>
    </Content>
  );
};
