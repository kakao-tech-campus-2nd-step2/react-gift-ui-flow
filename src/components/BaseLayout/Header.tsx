import { colors } from '@/styles/theme';

import { Button } from '@/components/ui/Button/Button';
import { Content } from '@/components/ui/Layout/Content';

import { Logo } from './Logo';
import { headerStyle } from './styles';

export const Header = () => {
  return (
    <Content
      css={headerStyle}
      backgroundColor={colors.white}
      height="3.5rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />
      <Button theme="outline">로그인</Button>
    </Content>
  );
};
