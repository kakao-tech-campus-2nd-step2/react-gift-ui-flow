import { colors } from '@/styles/theme';

import { Content } from '@/components/ui/Layout/Content';

import { footerStyles } from './styles';

export const Footer = () => {
  return (
    <Content backgroundColor={colors.gray[100]} height="12rem">
      <div css={footerStyles}>카카오톡 선물하기</div>
    </Content>
  );
};
