import { colors } from '@/styles/theme';

import { Content } from '@/components/ui/Layout/Content';

import { AuthButton } from './AuthButton';
import { Logo } from './Logo';
import { headerStyle } from './styles';

export const Header = () => {
  const isLoggedIn = !!sessionStorage.getItem('authToken');

  return (
    <Content
      css={headerStyle}
      backgroundColor={colors.white}
      height="3.5rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />
      <AuthButton isLoggedIn={isLoggedIn} />
    </Content>
  );
};
