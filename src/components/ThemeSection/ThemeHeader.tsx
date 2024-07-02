import profile from '@/assets/default-profile.jpg';
import { colors } from '@/styles/theme';

import { Image } from '@/components/ui/Image/Image';
import { Content } from '@/components/ui/Layout/Content';

import { themeProfileStyle, themeTextStyle } from './style';

export const ThemeHeader = () => {
  const onClick = () => {
    // eslint-disable-next-line no-alert
    alert('선물 받을 친구 선택하기');
  };

  return (
    <Content
      alignItems="center"
      height="10rem"
      backgroundColor={colors.gray[100]}
      gap="1rem"
    >
      <Image
        width="5rem"
        radius={24}
        ratio="square"
        src={profile}
        css={themeProfileStyle}
        onClick={onClick}
      />
      <div css={themeTextStyle}>선물 받을 친구를 선택해주세요.</div>
    </Content>
  );
};
