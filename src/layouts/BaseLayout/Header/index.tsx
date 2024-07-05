import logo from '@/assets/logo.png';
import { colors } from '@/styles/theme';

import { Content } from '@/components/Content';
import { Logo } from '@/components/Logo';

import { AuthButton } from './AuthButton';
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
      <Logo src={logo} alt="카카오 선물하기 로고" width="86" />
      <AuthButton />
    </Content>
  );
};
